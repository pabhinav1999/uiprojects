/* Question 1
  Implement loadash throttle, debounce, loadash polyfill , throttle polyfill*/

  let click_counter = 0;
  let debounce_counter = 0;
  let throttle_counter = 0;
  let debounce_counter_loadash = 0;
  let throttle_counter_loadash = 0;

  function increaseDebounceCount() {
     console.log('button pressed debounce count ', debounce_counter++);
  }

  function increaseThrottleCount() {
    console.log('button pressed throttle ',throttle_counter++);
 }

  const debounce_click = function(fn,delay){
    let timer;
    return function() {
        console.log('Button pressed',click_counter++);
        let context = this;
        clearTimeout(timer);
         timer = setTimeout(()=>{
            fn.apply(context);
        },delay) 
    }
  }

  const throttle_click = function(fn,delay){
    let isFnExecuting = false;
    return function() {
        console.log('Button pressed',click_counter++);
        if(!isFnExecuting){
            let context = this;
            fn.apply(context);
            isFnExecuting = true;
            setTimeout(()=>{
                isFnExecuting = false;
            },delay) 
        }
    }
  }

  const debouncePollyfill = debounce_click(increaseDebounceCount,2000);
  const throttlePollyfill = throttle_click(increaseThrottleCount,5000);

  const debounceExecThroughLoadash = _.debounce(()=>{
    console.log('debounce button exec through loadash', debounce_counter_loadash++)
  }, 3000)

  const throttleExecThroughLoadash = _.throttle(()=>{
    console.log('throttle button exec through loadash', throttle_counter_loadash++)
  }, 10000)

