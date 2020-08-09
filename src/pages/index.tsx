import React, { useState } from 'react'
import { Image, Input, View } from '@tarojs/components'

export default function () {
  const [s, setS] = useState('')

  return (
    <View>
      <View>
        <Image src='https://cdn.jsdelivr.net/gh/fjc0k/placekitten/images/100/100.jpg' />
      </View>
      <View>s: {s}</View>
      <Input
        value={s}
        placeholder='请输入'
        onInput={e => setS(e.detail.value)}
      />
    </View>
  )
}
