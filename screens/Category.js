import { FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTile';

function renderCategoryItem(itemData){
    <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />
}


function CategoryScreen(){
    return  <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={(item)=> item.id}  />
}

export default CategoryScreen;