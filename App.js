import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {HomeScreen} from "./src/screens/HomeScreen";
import {ListScreen} from "./src/screens/ListScreen";
import { ComponentScreen } from "./src/screens/ComponentScreen";
import { ImageScreen } from "./src/screens/ImageScreen";
import {CounterScreen} from "./src/screens/CounterScreen";
import { TextScreen } from "./src/screens/TextScreen";
import { BoxScreen } from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Components: ComponentScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
