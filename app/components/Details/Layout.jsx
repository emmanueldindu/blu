import { View, Text } from 'react-native'
import React from 'react'

const Layout = () => {

    const [activeTab, setActiveTab] = useState("Availability");
    const renderContent = () => {
        switch (activeTab) {
          case "Availability":
            return (
            <Availability />
            );
          case "Reviews":
            return (
            <Reviews />
            );
          case "About":
            return (
              <About /> 
            );
          default:
            return null;
        }
      };

  return (
    <View>
      <Text>Layout</Text>
    </View>
  )
}

export default Layout