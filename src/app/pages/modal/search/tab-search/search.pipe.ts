import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHighlight'
})
export class SearchHighlightPipe implements PipeTransform {
  transform(value: string, keyword: string): string {
    if (!keyword || !value) {
      return value;
    }

    // 정규표현식으로 키워드와 일치하는 부분을 찾아 HTML 태그로 감싸줍니다.
    const re = new RegExp(`(${keyword})`, 'gi');
    return value.replace(re, "<span class='text-blue-500'>$1</span>");
  }
}