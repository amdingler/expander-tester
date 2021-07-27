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
   CheckBox,
   Switch,
   Image,
   ImageURISource,
   Pressable
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 import { Button, WinUI } from 'react-native-xaml';
 import { Picker } from '@react-native-picker/picker';
 import { Expander } from '@fluentui-react-native/experimental-expander';
  
 const icon: ImageURISource = {
   uri:
     "https://user-images.githubusercontent.com/33470154/104789118-fa16eb80-5748-11eb-9870-68360eca6fa6.png"
 };
 
 // const CustomNativeButton = NativeButton.customize({
 //   accentColor: '#fca905',
 // });
 
 class App extends Component {
 
   state = {
     ExpanderText: "Initial State",
     switch1: false
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

   render() {
       return (
           <View style={{margin: 16}}>
             <ScrollView>
 
               <Text>{"\n"}{"\n"}Expander 1: Text only. Header/content width is not set, so Expander matches parent</Text>
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
 
               <Expander collapsedHeight={50} expandedHeight={100} expanded={true} expandDirection="up" onCollapsing={this.onCollapsed} onExpanding={this.onExpanding}>
                 <Text>{this.state.ExpanderText}</Text>
                 <Text>Text in the content</Text>
               </Expander>

               <Text>{"\n"}Expander 4: Disabled</Text>

               <Expander collapsedHeight={50} enabled={false}>
                 <Text>I am disabled</Text>
                 <Text>Content that you should not see</Text>
               </Expander>

               <Text>{"\n"}Expander 5: Expander w/ Switch and Image</Text>
 
               <Expander collapsedHeight={64} expandedHeight={195} contentHorizontalAlignment="stretch" enabled={true} expanded={false}
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
                 <Text style={{width: 200}}>Text in the content
                   {"\n"}Text in the content
                   {"\n"}Text in the content
                   {"\n"}Text in the content
                   {"\n"}Text in the content
                 </Text>
               </Expander>
 
               <Text>{"\n"}Expander 6: Native control in header</Text>
 
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
 
               <Text>{"\n"}Expander 7: React Native XAML control in header</Text>
 
               <Expander collapsedHeight={70} expandedHeight={225} chevronUpGlyph={icon}>
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

               <Text>{"\n"}Expander 8: Colorful</Text>

               <Expander collapsedHeight={50} expandedHeight={100} headerBackground="#9c9c9c" headerForeground="#ffffff" contentBackground="#c3c3c3"
                         chevronBackground="#ff7f7f" chevronForeground="#ffffff" chevronPointerOverBackground="#b5ffb2" chevronPointerOverForeground="#bfbdbd"
                         chevronPressedBackground="#ffb2f4" chevronPressedForeground="#912a2a" headerForegroundPointerOver="#27f238" 
                         headerForegroundPressed="#f227eb" headerBorderBrush="#f22727" headerBorderPointerOverBrush="#27f238"
                         headerBorderPressedBrush="#f227eb" contentBorderBrush="#f227eb" headerBorderThickness={2} chevronBorderBrush="#f22727" 
                         chevronBorderPointerOverBrush="#27f238" chevronBorderPressedBrush="#f227eb" chevronBorderThickness={2}>
                 <Text style={{width: 200}}>I change color based on state (hover, press, rest)</Text>
                 <Text style={{width: 200}}>Text in the content</Text>
               </Expander>
             </ScrollView>
           </View>
       )
   }
 }
 
 export default App;