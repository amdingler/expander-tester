/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   Switch,
   Image,
   ImageURISource,
   Pressable,
   TextInput
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 import { WinUI, Button, RadioButton, CheckBox, TextBox, PasswordBox } from 'react-native-xaml';
 import { Picker } from '@react-native-picker/picker';
 import { Expander } from '@fluentui-react-native/experimental-expander';
 import { ActivityIndicator } from '@fluentui/react-native';
 
 class App extends Component {
 
   state = {
     ExpanderText: "Initial State",
     switch1: false,
     crustType: "Classic",
     crustStyle: "Regular"
   }
 
   onExpanding = () => {
     this.setState({
       ExpanderText: "Expanding event changed title",
     })
   }
 
   onCollapsed = () => {
     this.setState({
       ExpanderText: "Collapsing event changed title",
     })
   }

   onSwitchChange1 = () => {
     this.setState({
       switch1: !this.state.switch1
     })
   }

   CustomizedExpander = Expander.customize({
    headerBackground: "#9c9c9c",
    headerForeground: "#ffffff",
    contentBackground:"#c3c3c3",
    chevronBackground: "#ff7f7f",
    chevronForeground: "#ffffff",
    chevronPointerOverBackground: "#b5ffb2",
    chevronPointerOverForeground: "#bfbdbd",
    chevronPressedBackground: "#ffb2f4",
    chevronPressedForeground: "#912a2a",
    headerForegroundPointerOver: "#27f238",
    headerForegroundPressed: "#f227eb",
    headerBorderBrush: "#f22727",
    headerBorderPointerOverBrush: "#27f238",
    headerBorderPressedBrush: "#f227eb",
    contentBorderBrush: "#f227eb",
    headerBorderThickness: 2,
    chevronBorderBrush: "#f22727",
    chevronBorderPointerOverBrush: "#27f238",
    chevronBorderPressedBrush: "#f227eb",
    chevronBorderThickness: 2
  });

   render() {
       return (
           <View style={{flexDirection: "column", flex: 1}}>
             <View style={{flexDirection: "row", flex: 1, alignSelf: "center", alignItems: "center"}}>
                <Text style={{fontSize: 28, fontWeight: "bold"}}>RNW Application</Text>
             </View>
             <View style={{flexDirection: "row", flex: 4}}>
                  <View style={{flex: 1, backgroundColor: "#B6D6CC"}}>
                    <View style={{margin: 16}}>
                      <Text style={{fontSize: 20, fontWeight: "bold"}}>Basic Examples</Text>  

                      <Text>{"\n"}Expander 1: Text only. Header/content width is not set, so Expander matches parent</Text>
                      <Expander collapsedHeight={50} expandedHeight={100}>
                        <Text>Text in the header</Text>
                        <Text>Text in the content</Text>
                      </Expander> 

                      <Text>{"\n"}Expander 2: Text only, more content</Text>

                      <Expander collapsedHeight={50} expandedHeight={175}>
                        <Text style={{width: 150}}>Text in the header</Text>
                        <Text style={{width: 150}}>Text in the content
                          {"\n"}Text in the content
                          {"\n"}Text in the content
                          {"\n"}Text in the content
                          {"\n"}Text in the content
                        </Text>
                      </Expander>

                      <Text>{"\n"}Expander 3: Initial state is expanded, expands upwards, and event functionality</Text>

                      <Expander collapsedHeight={50} expandedHeight={100} expanded={true} expandDirection="up" onCollapsing={this.onCollapsed} onExpanding={this.onExpanding} height={400}>
                        <Text>{this.state.ExpanderText}</Text>
                        <Text>Text in the content</Text>
                      </Expander>

                      <Text>{"\n"}Expander 4: Disabled control</Text>

                      <Expander collapsedHeight={50} enabled={false}>
                        <Text>User cannot interact with this control</Text>
                        <Text>Content that you should not see</Text>
                      </Expander>
                      </View>
                  </View>
                  <View style={{flex: 1, backgroundColor: "#97C4B6"}}>
                    <View style={{margin: 16}}>
                      <Text style={{fontSize: 20, fontWeight: "bold"}}>Expander with Images</Text>
                      <Text>{"\n"}Expander 5: Expander w/ Switch and Image</Text>

                      <Expander collapsedHeight={64} expandedHeight={150} contentHorizontalAlignment="stretch" enabled={true} expanded={false}
                                headerDisabledForeground="#f22727" headerDisabledBorderBrush="#27f238">
                        <View style={{flexDirection: "row", width: 200, height: 62}}>
                          <Image
                            style={{width: 16, height: 16, marginRight: 8, alignSelf: "center"}}
                            source={{
                              uri: 'https://user-images.githubusercontent.com/33470154/104789118-fa16eb80-5748-11eb-9870-68360eca6fa6.png',
                            }}/>
                          <View style={{alignSelf:"center"}}>
                            <Text>Line one</Text>
                            <Text>Line two</Text>
                          </View>
                          <Switch style={{marginLeft:"auto", marginTop:12}}
                              value={this.state.switch1}
                              onValueChange={this.onSwitchChange1} />
                        </View>
                        <Image
                            style={{width: 50, height: 50, marginRight: 8, alignSelf: "center"}}
                            source={{
                              uri: 'https://user-images.githubusercontent.com/33470154/104789118-fa16eb80-5748-11eb-9870-68360eca6fa6.png',
                            }}/>
                      </Expander>
                    </View>
                  </View>
                </View>
                <View style={{flexDirection: "row", flex: 4}}>
                  <View style={{flex: 1, backgroundColor: "#97C4B6"}}>
                    <View style={{margin: 16}}>
                      <Text style={{fontSize: 20, fontWeight: "bold"}}>Complex Expander</Text>
                      <Text>{"\n"}Expander 6: Nest Expander in Content</Text>

                      <Expander collapsedHeight={50} expandedHeight={230}>
                        <Text style={{width: 500}}>Expand to select your meal</Text>
                        <View style={{width: 500}}>
                          <ScrollView style={{height: 150}}>
                              <Expander collapsedHeight={50} expandedHeight={200}>
                                <View style={{flexDirection: "row"}}>
                                  <Text>Choose your crust</Text>
                                  {/* <Text style={{alignSelf: "flex-end"}}>{this.state.crustType}, {this.state.crustStyle}</Text> */}
                                </View>
                                <View style={{flexDirection: "row"}}>
                                  <View style={{width: 250}}>
                                    <RadioButton height={28} content={{string: "Classic"}}/>
                                    <RadioButton height={28} content={{string: "Whole wheat"}}/>
                                    <RadioButton height={28} content={{string: "Gluten free"}}/>
                                  </View>
                                  <View width={125}>
                                    <RadioButton height={28} content={{string: "Regular"}}/>
                                    <RadioButton height={28} content={{string: "Thin"}}/>
                                    <RadioButton height={28} content={{string: "Pan"}}/>
                                    <RadioButton height={28} content={{string: "Stuffed"}}/>
                                  </View>
                                </View>
                              </Expander>
                              <Expander collapsedHeight={50} expandedHeight={200}>
                                <Text>Choose your sauce</Text>
                                <View>
                                  <RadioButton height={28} content={{string: "Classic red"}}/>
                                  <RadioButton height={28} content={{string: "Garlic"}}/>
                                  <RadioButton height={28} content={{string: "Pesto"}}/>
                                  <RadioButton height={28} content={{string: "Barbeque"}}/>
                                </View>
                              </Expander>
                              <Expander collapsedHeight={50} expandedHeight={280}>
                                <Text>Choose your toppings</Text>
                                <View style={{width: 300}}>
                                  <ScrollView style={{height: 200}}>
                                    <Expander collapsedHeight={50} expandedHeight={125}>
                                      <View style={{width: 300}}>
                                        <RadioButton height={28} width={100} content={{string: "House special"}}/>
                                      </View>
                                      <Text>Cheese, pepperoni, sausage, black olives, mushrooms</Text>
                                    </Expander>
                                    <Expander collapsedHeight={50} expandedHeight={125}>
                                      <View style={{width: 300}}>
                                        <RadioButton height={28} width={100} content={{string: "Vegetarian"}}/>
                                      </View>
                                      <Text>Cheese, mushrooms, black olives, green peppers, artichoke hearts</Text>
                                    </Expander>
                                    <Expander collapsedHeight={50} expandedHeight={125}>
                                      <View style={{width: 300}}>
                                        <RadioButton width={100} height={28} content={{string: "Meat"}}/>
                                      </View>
                                      <Text>Cheese, pepperoni, sausage, ground beef, salami</Text>
                                    </Expander>
                                    <Expander collapsedHeight={50} expandedHeight={240}>
                                      <RadioButton height={28} content={{string: "Create your own"}}/>
                                      <View style={{flexDirection: "row"}}>
                                        <View>
                                          <CheckBox content={{string: "Cheese"}}/>
                                          <CheckBox content={{string: "Pepperoni"}}/>
                                          <CheckBox content={{string: "Sausage"}}/>
                                          <CheckBox content={{string: "Ground beef"}}/>
                                          <CheckBox content={{string: "Salami"}}/>
                                        </View>
                                        <View>
                                          <CheckBox content={{string: "Mushroom"}}/>
                                          <CheckBox content={{string: "Black olives"}}/>
                                          <CheckBox content={{string: "Green peppers"}}/>
                                          <CheckBox content={{string: "Artichoke hearts"}}/>
                                        </View>
                                      </View>
                                    </Expander>
                                  </ScrollView>
                                </View>
                              </Expander>
                          </ScrollView>
                        </View>
                      </Expander>
                    </View>
                  </View>
                  <View style={{flex: 1, backgroundColor: "#B6D6CC"}}>
                    <View style={{margin: 16}}>
                      <Text style={{fontSize: 20, fontWeight: "bold"}}>Additional Expander Examples</Text>
  
                      <Text>{"\n"}Expander 7: Native control in header</Text>

                      <Expander width={500} collapsedHeight={50} expandedHeight={300}
                                contentVerticalAlignment="bottom" contentHorizontalAlignment="right">
                        <Picker style={{width: 150}}>
                            <Picker.Item label="Option 1" value="Option 1"/>
                            <Picker.Item label="Option 2" value="Option 2"/>
                            <Picker.Item label="Option 3" value="Option 3"/>
                          </Picker>
                        <View style={{width: 300}}>
                          <Text>Content is aligned to the bottom right</Text>
                          <Button height={50} content="this is a button" onClick={() => { alert("you clicked the button!"); }} />
                        </View>
                      </Expander>

                      <Text>{"\n"}Expander 8: React Native XAML control in header</Text>

                      <Expander collapsedHeight={70} expandedHeight={225}>
                        <View style={{width: 300, padding:8}}>
                          <Text>Multiple components in the header</Text>
                          <Button content="react-native-xaml button" onClick={() => { alert("you clicked the button!"); }} />
                        </View>
                        <View style={{width: 300}}>
                          <Text>Multiple components in the content</Text>
                          <Button height={50} content="react-native-xaml button" onClick={() => { alert("you clicked the button!"); }} />
                          <Button height={50} content="react-native-xaml button" onClick={() => { alert("you clicked the button!"); }} />
                        </View>
                      </Expander>

                      <Text>{"\n"}Expander 9: Colorful</Text>

                      <Expander collapsedHeight={50} expandedHeight={100} headerBackground="#9c9c9c" headerForeground="#ffffff" contentBackground="#c3c3c3"
                                chevronBackground="#ff7f7f" chevronForeground="#ffffff" chevronPointerOverBackground="#b5ffb2" chevronPointerOverForeground="#bfbdbd"
                                chevronPressedBackground="#ffb2f4" chevronPressedForeground="#912a2a" headerForegroundPointerOver="#27f238" 
                                headerForegroundPressed="#f227eb" headerBorderBrush="#f22727" headerBorderPointerOverBrush="#27f238"
                                headerBorderPressedBrush="#f227eb" contentBorderBrush="#f227eb" headerBorderThickness={2} chevronBorderBrush="#f22727" 
                                chevronBorderPointerOverBrush="#27f238" chevronBorderPressedBrush="#f227eb" chevronBorderThickness={2}>
                        <Text style={{width: 200}}>I change color based on state (hover, press, rest)</Text>
                        <Text style={{width: 200}}>Text in the content</Text>
                      </Expander>
                    </View>
                  </View>
                </View>
           </View>
       )
   }
 }
 
 export default App;