# mediaQueryEvents

## Usage
```javascript
$win.on('mq.mob', function (e) {
  console.log('mob!');
});

$win.on('mq.tab', function (e) {
  console.log('tab!');
});

$win.on('mq.desk', function (e) {
  console.log('desk!');
});


$win.mediaQueryEvents({
  breakpoints: {
    desk: '(min-width: 1230px)',
    tab: '(min-width: 768px) and (max-width: 1229px)',
    mob: '(min-width: 0px) and (max-width: 767px)'
  }
});

```
