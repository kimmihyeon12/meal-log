import { Injectable } from "@angular/core";
import { SupabaseService } from "./supabase.service";
import { BehaviorSubject, catchError, from, tap, throwError } from "rxjs";
import { IFoodDetail, IFoods } from "../interfaces/foods.type";

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  private foodsSubject = new BehaviorSubject<IFoods[]>([]);
  private foodDetailSubject = new BehaviorSubject<IFoodDetail>({
    id: 0,
    name: "",
    brend: "",
    food_name: "",
    size: 0,
    sizeUnit: "",
    kcal: 0,
    province: 0,
    carbohydrate: 0,
    protein: 0,
    sugar: 0,
    cholesterol: 0,
    sodium: 0,

  });

  readonly foods$ = this.foodsSubject.asObservable();
  readonly foodDetail$ = this.foodDetailSubject.asObservable();

  constructor(private supabaseService: SupabaseService) { }

  public foodsSearch(name: string) {
    from(this.supabaseService
      .getSupabase()
      .from('foods_dev')
      .select('*')
      .ilike('name', `%${name}%`)
      // .or(`brend.ilike.%${name}%,foodName.ilike.%${name}%`)
      .limit(20)
    )
      .pipe(
        tap((res: any) => {
          if (res) {
            this.foodsSubject.next(res.data)
          } else {
            this.foodsSubject.next([])
          }
        }),
        catchError((err) => {
          if (err.message) {
            return throwError(err.message);
          }
          return throwError('음식 찾기 오류');
        })
      )
      .subscribe()
  }

  public foodsFindOne(id: number) {
    from(this.supabaseService
      .getSupabase()
      .from('foods_dev')
      .select('*')
      .eq('id', id)
      .single()
    )
      .pipe(
        tap((res: any) => {
          if (res) {
            this.foodDetailSubject.next(res.data)
          }
        }),
        catchError((err) => {
          if (err.message) {
            return throwError(err.message);
          }
          return throwError('음식상세 찾기 오류');
        })
      )
      .subscribe()
  }

  public foodsUpdate() { }

  public foodsFindAll() { }

  public foodsRemove() { }

  public foodsInsert() { }



}
