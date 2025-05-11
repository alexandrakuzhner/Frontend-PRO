import { createContext, useCallback, useContext, useState } from 'react';
import products from '../products.json';

const ProductContext = createContext();

// Количество продуктов (можно изменить до 1000)
const initialProducts = products.slice(0, 100);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  // Изменение количества продукта
  const changeQuantity = useCallback((id, amount) => {
    setProducts(
      products.map(product =>
        product.id === id ?
          { ...product, quantity: Math.max(1, product.quantity + amount) } :
          product
      )
    );
  }, [products]);

  // Изменение цены продукта
  const changePrice = (id, amount) => {
    setProducts(
      products.map(product =>
        product.id === id ?
          { ...product, price: Math.max(1, product.price + amount) } :
          product
      )
    );
  };

  // Сортировка продуктов по критериям
  const sortProducts = useCallback((criteria) => {
    const sortedProducts = [...products];

    switch (criteria) {
      case 'name':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'quantity':
        sortedProducts.sort((a, b) => a.quantity - b.quantity);
        break;
      default:
        break;
    }

    setProducts((prevProducts));
  }, []);

  // Вычисление статистики
  const calculateStatistics = () => {
    const totalProducts = products.reduce((sum, product) => sum + product.quantity, 0);
    const totalBeforeDiscount = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    const totalDiscounts = products.reduce((sum, product) => sum + (product.price * product.quantity * product.discount / 100), 0);
    const finalTotal = totalBeforeDiscount - totalDiscounts;
    const averagePrice = totalBeforeDiscount / totalProducts;

    return {
      totalProducts,
      totalBeforeDiscount,
      totalDiscounts,
      finalTotal,
      averagePrice
    };
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        changeQuantity,
        changePrice,
        sortProducts,
        calculateStatistics
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Хук для использования контекста
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};