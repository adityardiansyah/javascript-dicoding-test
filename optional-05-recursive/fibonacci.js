function fibonacci(n) {

  if(n < 1){
    return [0];
  }

  if(n === 1){
    return [0,1];
  }

  const prevFibo = fibonacci(n - 1);
  const nextFibo = prevFibo[prevFibo.length - 1] + prevFibo[prevFibo.length - 2];
  return [...prevFibo, nextFibo];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
