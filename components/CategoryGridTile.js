import { Pressable, View } from "react-native";


function CategoryGridTitle({title, color}){
    return(
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTitle;
