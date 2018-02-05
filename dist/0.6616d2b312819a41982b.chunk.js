webpackJsonp([0],{"+/wz":function(t,n){t.exports='<div class="postDetail">\n  <div *ngIf="post">\n    <h5>Edit post:</h5>\n    <form [formGroup]="form" (ngSubmit)="save()">\n      <mat-input-container>\n        <input matInput formControlName="title"  placeholder="Title">\n        <mat-error>This field is required</mat-error>\n      </mat-input-container><br>\n      <mat-input-container>\n        <textarea matInput mat-autosize minRows="6" placeholder="Your post content..." formControlName="content"></textarea>\n      </mat-input-container>\n      <button mat-raised-button type="submit">Save</button>\n    </form>\n  </div>\n</div>'},"+pb+":function(t,n,e){"use strict";var o=e("rCTf"),i=e("xAJs");o.Observable.prototype.map=i.map},"13K7":function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var o=e("5evp"),i=e("UVw0"),r=e("HXvX"),a=e("e98k"),s=[{path:"",children:[{path:"",component:o.a},{path:"post-detail/:id",component:a.a},{path:"new",component:i.a},{path:"edit/:id",component:r.a}]}]},"1OqQ":function(t,n,e){n=t.exports=e("FZ+f")(void 0),n.push([t.i,".postDetail{width:70%;margin:auto}",""])},"33vV":function(t,n){t.exports='<div class="posts">\n  <p>The post list is composed by the angular components querying the GraphQL and displaying the result</p>\n  <div aria-flowto="<left></left>">\n    <h2>Posts list</h2>\n    <button class="addBtn" mat-fab [routerLink]="[\'/posts/new\']"> <mat-icon>add</mat-icon></button>\n    <br>\n  </div>\n  <mat-input-container>\n    <input matInput type="search" [(ngModel)]=\'listPostFilter\' [formControl]="postControl" placeholder="search...">\n  </mat-input-container>\n  <mat-card *ngFor="let post of posts | async | postsFilter:listPostFilter">\n    <mat-list>\n      <mat-list-item>\n        <a mat-line [routerLink]="[\'/posts/post-detail\', post.id]"> {{post.title}} </a>\n        <p mat-line>\n          <span>{{post.content}}</span>\n        </p>\n        <span><button mat-button (click)=\'deletePost(post.id)\'><mat-icon>delete</mat-icon></button></span>\n        <span><button mat-button [routerLink]="[\'/posts/edit\', post.id]"><mat-icon>edit</mat-icon></button></span>\n      </mat-list-item>\n    </mat-list>\n  </mat-card>\n</div>\n'},"3FTi":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("zuH6");e.d(n,"PostsModule",(function(){return o.a}))},"3oVy":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e("TToO"),i=e("3j3K"),r=(function(){function t(){}return t.prototype.transform=function(t,n){return n=n?n.toLocaleLowerCase():null,n?t.filter((function(t){return-1!==t.title.toLocaleLowerCase().indexOf(n)})):t},t})();r=o.b([e.i(i.Y)({name:"postsFilter"})],r)},"5evp":function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var o=e("TToO"),i=e("3j3K"),r=e("NVOs"),a=e("EEr4"),s=(e.n(a),e("1Fhu")),u=e("DUFE"),c=e("aV5h"),p=(e.n(c),e("+pb+")),l=(e.n(p),e("hzF8")),f=(e.n(l),(function(){function t(t,n){this._postService=t,this.snackBar=n,this.postControl=new r.j,this.nameFilter=new a.Subject}return t.prototype.ngOnInit=function(){var t=this;this.posts=this._postService.get(),this.postControl.valueChanges.debounceTime(300).subscribe((function(n){t.nameFilter.next(n)}))},t.prototype.deletePost=function(t){var n=this;this._postService.delete(t).then((function(t){n.openSnackBar(t.message,"Delete"),n.posts.refetch()})).catch((function(t){n.openSnackBar(t.message,"Delete")}))},t.prototype.openSnackBar=function(t,n){this.snackBar.open(t,n,{duration:4e3})},t})());f=o.b([e.i(i._12)({selector:"post-list",template:e("33vV"),styles:[e("da7E")]}),o.c("design:paramtypes",[s.a,u.h])],f)},"6ji1":function(t,n){t.exports='<div class="post"> \n  <h2>{{pageTitle}}</h2>\n  <div *ngIf="post">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title class="title">{{post.title }}</mat-card-title>\n        <mat-card-subtitle>_________________________</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>{{post.content}}</p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>'},"8Z8y":function(t,n,e){"use strict";var o=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},i=(function(t){function n(){var n=t.call(this,"argument out of range");this.name=n.name="ArgumentOutOfRangeError",this.stack=n.stack,this.message=n.message}return o(n,t),n})(Error);n.ArgumentOutOfRangeError=i},HXvX:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var o=e("TToO"),i=e("3j3K"),r=e("NVOs"),a=e("5oXY"),s=e("HRRT"),u=e("Up4M"),c=e("T44c"),p=(function(){function t(t,n,e,o){this.route=n,this.router=e,this.apollo=o,this.form=t.group({title:["",[r.h.required]],content:[""]}),this.apollo=o}return t.prototype.ngOnInit=function(){var t=this,n=this;this.sub=this.route.params.subscribe((function(n){t.id=n.id})),this.apollo.watchQuery({query:u.a,variables:{id:this.id}}).subscribe((function(e){var o=e.data;n.post=o.post,t.form.setValue({title:o.post.title,content:o.post.content})}))},t.prototype.save=function(){var t=this;this.form.valid&&this.apollo.mutate({mutation:c.a,variables:{id:this.post.id,data:{title:this.form.value.title,content:this.form.value.content}}}).take(1).subscribe({next:function(n){var e=n.data;console.log("edit post",e),t.router.navigate(["/posts"])},error:function(t){console.log("there was an error sending the query",t)}})},t})();p=o.b([e.i(i._12)({selector:"edit-post",template:e("+/wz"),styles:[e("Rifc")]}),o.c("design:paramtypes",[r.k,a.c,a.d,s.b])],p)},"K5E/":function(t,n,e){n=t.exports=e("FZ+f")(void 0),n.push([t.i,".posts{width:70%;margin:auto}.posts .addBtn{float:right}",""])},KOei:function(t,n){t.exports='<div class="postDetail">\n  <h5>Add new post:</h5>\n  <form [formGroup]="form" (ngSubmit)="save()">\n    <mat-input-container>\n      <input matInput formControlName="title" placeholder="Title">\n      <mat-error>This field is required</mat-error>\n    </mat-input-container><br>\n    <mat-input-container>\n      <textarea matInput mat-autosize minRows="6" placeholder="Your post content..." formControlName="content"></textarea>\n    </mat-input-container>\n    <button mat-raised-button type="submit">Save</button>\n  </form>\n</div>'},LRcU:function(t,n,e){var o=e("bWLm");t.exports="string"==typeof o?o:o.toString()},POFt:function(t,n,e){"use strict";function o(t){return 0===t?new s.EmptyObservable:this.lift(new u(t))}var i=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)},r=e("mmVS"),a=e("8Z8y"),s=e("jBEF");n.take=o;var u=(function(){function t(t){if(this.total=t,this.total<0)throw new a.ArgumentOutOfRangeError}return t.prototype.call=function(t,n){return n.subscribe(new c(t,this.total))},t})(),c=(function(t){function n(n,e){t.call(this,n),this.total=e,this.count=0}return i(n,t),n.prototype._next=function(t){var n=this.total,e=++this.count;e<=n&&(this.destination.next(t),e===n&&(this.destination.complete(),this.unsubscribe()))},n})(r.Subscriber)},Rifc:function(t,n,e){var o=e("zKio");t.exports="string"==typeof o?o:o.toString()},UVw0:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var o=e("TToO"),i=e("3j3K"),r=e("NVOs"),a=e("5oXY"),s=e("HRRT"),u=e("Up4M"),c=e("T44c"),p=(function(){function t(t,n,e){this.router=n,this.apollo=e,this.form=t.group({title:["",[r.h.required]],content:[""]}),this.apollo=e}return t.prototype.save=function(){var t=this;this.form.valid&&this.apollo.mutate({mutation:c.b,variables:{data:{title:this.form.value.title,content:this.form.value.content}},refetchQueries:[{query:u.b}]}).take(1).subscribe({next:function(n){var e=n.data;console.log("got a new post",e),t.router.navigate(["/posts"])},error:function(t){console.log("there was an error sending the query",t)}})},t})();p=o.b([e.i(i._12)({selector:"new-post",template:e("KOei"),styles:[e("mt+5")]}),o.c("design:paramtypes",[r.k,a.d,s.b])],p)},aV5h:function(t,n,e){"use strict";var o=e("rCTf"),i=e("driz");o.Observable.prototype.debounceTime=i.debounceTime},bWLm:function(t,n,e){n=t.exports=e("FZ+f")(void 0),n.push([t.i,".post{width:70%;margin:auto}.post .title{font-weight:700}",""])},da7E:function(t,n,e){var o=e("K5E/");t.exports="string"==typeof o?o:o.toString()},e98k:function(t,n,e){"use strict";e.d(n,"a",(function(){return m}));var o=e("TToO"),i=e("3j3K"),r=e("NVOs"),a=e("HRRT"),s=e("EEr4"),u=(e.n(s),e("5oXY")),c=e("aV5h"),p=(e.n(c),e("+pb+")),l=(e.n(p),e("hzF8")),f=(e.n(l),e("Up4M")),m=(function(){function t(t,n){this.route=n,this.pageTitle="Post detail:",this.postControl=new r.j,this.nameFilter=new s.Subject,this.apollo=t}return t.prototype.ngOnInit=function(){var t=this;this.sub=this.route.params.subscribe((function(n){t.id=n.id})),this.apollo.watchQuery({query:f.a,variables:{id:this.id}}).subscribe((function(n){var e=n.data;t.post=e.post}))},t.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},t})();m=o.b([e.i(i._12)({template:e("6ji1"),styles:[e("LRcU")]}),o.c("design:paramtypes",[a.b,u.c])],m)},hzF8:function(t,n,e){"use strict";var o=e("rCTf"),i=e("POFt");o.Observable.prototype.take=i.take},"mt+5":function(t,n,e){var o=e("1OqQ");t.exports="string"==typeof o?o:o.toString()},zKio:function(t,n,e){n=t.exports=e("FZ+f")(void 0),n.push([t.i,"",""])},zuH6:function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var o=e("TToO"),i=e("2Je8"),r=e("NVOs"),a=e("3j3K"),s=e("5oXY"),u=e("Fzro"),c=e("DUFE"),p=e("13K7"),l=e("5evp"),f=e("e98k"),m=e("UVw0"),h=e("HXvX"),d=e("3oVy"),b=(function(){function t(){}return t})();b.routes=p.a,b=o.b([e.i(a.z)({declarations:[l.a,m.a,h.a,d.a,f.a],imports:[i.e,r.a,s.a.forChild(p.a),r.b,s.a,u.a,c.b,c.c,c.e,c.f,c.g]})],b)}});