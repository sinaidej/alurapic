import { Input, Component } from '../../../../node_modules/@angular/core';


@Component({
    selector:'ap-photo',
    templateUrl:'photo.component.html'
})
export class PhotoComponent{
    @Input() description='';
    @Input() url='';
}