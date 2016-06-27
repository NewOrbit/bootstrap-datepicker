# bootstrap-datepicker

> Our custom angular datepicker based on [angular-ui/bootstrap](https://github.com/angular-ui/bootstrap)


## Install

```
$ npm install --save neworbit/bootstrap-datepicker#v1.1.0
```

```
$ bower install --save neworbit/bootstrap-datepicker#^1
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

- `npm version major | minor | patch`
- `git push --follow-tags`
- `Reminder: update install version on release`


## License

MIT © [NewOrbit](http://neworbit.co.uk)
