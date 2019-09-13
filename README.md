# mediaQueryEvents()
Allows any element observe and react when a breakpoint changes.

## [DEMO](https://frontid.github.io/mediaQueryEvents/)

## Usage
```
<script src="../mediaQueryEvents.jquery.js"></script>
```

```javascript
// $target = element observing a breakpoint change.
// -------------------------------------
const $target = $('.target');
const $info = $target.find('.current-breakpoint');

// Listeners. You need to prefix them with 'mq.' + breakpoint name.
// -------------------------------------
$target.on('mq.mob', function (e) {
  $info.text('mob!');
});

$target.on('mq.somebreakpoint', function (e) {
  $info.text('Another breakpoint!');
});

$target.on('mq.desk', function (e) {
  $info.text('desk!');
});

// Breakpoints mapping.
// -------------------------------------
$target.mediaQueryEvents({
  breakpoints: {
    "mob": '(min-width: 0px) and (max-width: 700px)',
    "somebreakpoint": '(min-width: 701px) and (max-width: 1023px)',
    "desk": '(min-width: 1024px)'
  }
});
```
