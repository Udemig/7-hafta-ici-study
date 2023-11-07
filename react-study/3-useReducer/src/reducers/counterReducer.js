// state'in nasıl değiceğine karar veren fonksiyon
// adlığı parametreler
// >> statein son hali
// >> dispatch edilen action
// reducer fonksitonun return değer state'in son değeri olur
export const reducer = (state, action) => {
  if (action.type === 'ARTTIR') {
    return { count: state.count + 1 };
  }
  if (action.type === 'AZALT') {
    return { count: state.count - 1 };
  }
};
