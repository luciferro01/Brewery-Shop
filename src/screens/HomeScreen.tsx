import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useStore} from '../store/store';

const getCategoriesFromData = (data: any) => {
  let temp: any = [];
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] === undefined) {
      temp[data[i].name] = data[i];
    } else {
      temp[data[i].name]++;
    }
    let categroies = Object.keys(temp);
    categroies.unshift('All');
    return categroies;
  }
};

const getCoffeeList = (category: string, data: any) => {
  if (category === 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name === category);
    return coffeelist;
  }
};

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  useEffect(() => {
    console.log(CoffeeList);
  }, [CoffeeList]);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
