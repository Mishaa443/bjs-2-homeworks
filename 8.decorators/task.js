function cachingDecoratorNew(func) {
    let cache = [];
  
    function wrapper(...args) {
      let hash = args.join(',');
      let existResult = cache.find(item => item.hash === hash);
  
      if (existResult) {
        console.log('Из кэша: ' + existResult.result);
        return 'Из кэша: ' + existResult.result;
      }
  
      let result = func.call(this, ...args);
      console.log('Вычисляем: ' + result);
  
      cache.push({hash, result});
  
      if (cache.length > 5) {
        cache.shift()
      }
      console.log('Вычисляем: ' + result);
      return 'Вычисляем: ' + result;
    }
  
    return wrapper;
  }


  function debounceDecoratorNew(func, ms) {
    
    let timeout;
    let firstCall = true;
  
    return function (...rest) {
      if (firstCall) {
        func.call(this, ...rest);
        firstCall = false;
        return
      }
  
      clearTimeout(timeout);
  
      timeout = setTimeout(() => {
        func.call(this, ...rest);
        firstCall = true;
      }, ms);
    };
  }

function debounceDecorator2(func) {
    let timeout;
    let firstCall = true;

    function wrapper(...args) {
      if (firstCall) {
        func.call(this, ...args);
        firstCall = false;
        wrapper.count++;
        return
      }

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        func.call(this, ...args);
        firstCall = true;
        wrapper.count++;
      }, ms);
    };

    wrapper.count = 0;

    return wrapper;
}

