import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safePipe'
})
export class SafePipePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}
 
 public transform(value: any,): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(value);
		
  }
}

