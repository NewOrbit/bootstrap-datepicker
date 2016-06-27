# bootstrap-datepicker

> Our custom angular datepicker based on [angular-ui/bootstrap](https://github.com/angular-ui/bootstrap)


## Install

```
$ npm install --save neworbit/bootstrap-datepicker#v2.0.0
```

```
$ bower install --save neworbit/bootstrap-datepicker#^2
```


## Usage


### With npm
```js
import bootstrapDatepicker from 'bootstrap-datepicker';

const app = angular.module('app', [
    bootstrapDatepicker
]);
```


### With bower

```html
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/bootstrap-datepicker/dist/datePicker.js"></script>
<script>
    var app = angular.module('app', [
        'ui.bootstrap'
    ]);
</script>

```


## Api

- [DatePicker](https://github.com/angular-ui/bootstrap/tree/master/src/datepicker/docs)
- [TimePicker](https://github.com/angular-ui/bootstrap/tree/master/src/timepicker/docs)


## CSS

### Using SASS:
- In your core scss file: `@import "~bootstrap-datepicker/dist/style.css";`

### Not using SASS:
- `<link href="bower_components/bootstrap-datepicker/dist/style.css" rel="stylesheet" type="text/css">`

To override colours, see the comments in src/datepicker.scss


## Release

- update version on `readme.md`
- `$ npm version --force major | minor | patch`
- `$ git push --follow-tags`


## License

MIT © [NewOrbit](http://neworbit.co.uk)
