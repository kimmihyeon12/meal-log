import { Injectable, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";

declare let Kakao: any;
declare let naver: any;
declare let gapi: any;

export class LoginService {
  private naverLogin: any

  constructor(
    private readonly ngZone: NgZone,
    private readonly http: HttpClient) { }

  //kakao login init naver login init
  async init() {
    this.kakaoInit();
    this.naverInit();
    this.googleInit();
  }

  kakaoInit() {
    Kakao.init('791e5dda69a721c3ff0ab026fd49c06d');
  }

  naverInit() {
    this.naverLogin = new naver.LoginWithNaverId({
      clientId: 'a_CTpOuIo7hfaCEWlShw',
      callbackUrl: "http://localhost:8100/login",
      isPopup: false
    });

    this.naverLogin.init();
  }

  googleInit() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: '1096901307198-lk5nd1tj8tihfd9kl3io4l5qkdma1vbu.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
        prompt: 'select_account',
        plugin_name: "chat"
      })
    });
  }

  async onGoogleLoginClick() {
    gapi.auth2.getAuthInstance().signIn().then((googleUser: any) => {
      console.log('구글 로그인 성공');
      const token = googleUser.getAuthResponse().id_token;
      console.log('토큰:', token);
      // 로그인 성공 시 수행할 작업

    });
    /*  const googleAuth = gapi.auth2.getAuthInstance();
      googleAuth.signIn().then((res: any) => {
        if (res) {
          const token = res.getAuthResponse().access_token;
          console.log('Google Access Token:', token);
        }
        else {
        }
      });*/

  }

  async loginWithNaver() {
    /* this.naverLogin.getLoginStatus(async (status: any) => {
       if (status) {
         // 아래처럼 선택하여 추출이 가능하고, 
         const userid = this.naverLogin.user.getEmail()
         const username = this.naverLogin.user.getName()
         console.log(userid)
         // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다. 
         // setUserInfo(naverLogin.user)
       } else {
         console.log(status)
       }
     })
 
 */
  }

  async loginWithKakao() {
    Kakao.Auth.login({
      success: (res: any) => {
        console.log('정상적으로 로그인 되었습니다.', res)
        this.getUserInfo(res.access_token)

      },
      fail: (err: any) => {
        console.error(err)
      }
    })
  }

  async getUserInfo(token: string) {
    await Kakao.Auth.setAccessToken(token);
    await Kakao.API.request({
      url: '/v2/user/me',
    })
      .then((res: any) => {
        console.log(JSON.stringify(res));
      })
      .catch((err: any) => {
        console.error(err)
      });
  }

}