import React, { FC } from 'react'
import { View, ViewProps, StyleSheet } from 'react-native'


export type ContainnerViewProps = ViewProps & {
    children: React.ReactNode

  };

const ContainnerView: FC<ContainnerViewProps> = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        
    },
})

export {ContainnerView};
