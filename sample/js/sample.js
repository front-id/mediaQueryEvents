$(function () {

  const $target = $('.target');
  const $info = $target.find('.current-breakpoint');

  const $target2 = $('.target2');
  const $info2 = $target2.find('.current-breakpoint');

  $target.mediaQueryEvents({
    breakpoints: {
      "mob": '(min-width: 0px) and (max-width: 700px)',
      "somebreakpoint": '(min-width: 701px) and (max-width: 1023px)',
      "desk": '(min-width: 1024px)'
    }
  });

  $target.on('mq.mob', function (e) {
    $info.text('mob!');
  });

  $target.on('mq.somebreakpoint', function (e) {
    $info.text('Another breakpoint!');
  });

  $target.on('mq.desk', function (e) {
    $info.text('desk!');
  });

  $target2.mediaQueryEvents({
    breakpoints: {
      "brk1": '(min-width: 0px) and (max-width: 500px)',
      "brk2": '(min-width: 501px) and (max-width: 600px)',
      "brk3": '(min-width: 601px) and (max-width: 700px)',
      "brk4": '(min-width: 701px) and (max-width: 800px)',
      "brk5": '(min-width: 801px) and (max-width: 900px)',
      "brk6": '(min-width: 901px) and (max-width: 1000px)',
      "brk7": '(min-width: 1001px) and (max-width: 1100px)',
      "brk8": '(min-width: 1101px) and (max-width: 1200px)',
      "brk9": '(min-width: 1201px)'
    }
  });

  // Sample 2. much more breakpoints.
  let sample2Breakpoints = [
    'mq.brk1',
    'mq.brk2',
    'mq.brk3',
    'mq.brk4',
    'mq.brk5',
    'mq.brk6',
    'mq.brk7',
    'mq.brk8',
    'mq.brk9'
  ];
  $target2.on(sample2Breakpoints.join(' '), function (e) {
    $info2.text(e.namespace);
  });


});