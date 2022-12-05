

import { Color_primary, Color_Primary_Tint, Color_Error, Color_Highlight, Color_Dark, Color_Light_Text, Color_Accent, Color_Grey } from './colors'

function Colors() {

    return (
      <section>
         <Color_primary>
            <h1>Primary: #1B4B66</h1>
         </Color_primary>

         <Color_Primary_Tint>
            <h1>Primary Tint: #639599</h1>
         </Color_Primary_Tint>

         <Color_Error>
            <h1>Error: #B00020</h1>
         </Color_Error>

         <Color_Highlight>
            <h1>Highlight: #FF8C4B</h1>
         </Color_Highlight>

         <Color_Dark>
            <h1>Dark: #13101E</h1>
         </Color_Dark>

         <Color_Light_Text>
            <h1>Light Text: #B6B6B6</h1>
         </Color_Light_Text>

         <Color_Grey>
            <h1>Grey: #F1F1F1</h1>
         </Color_Grey>

         <Color_Accent>
            <h1>Accent: #F4F4F4</h1>
         </Color_Accent>
      </section>
    )
  }
  
  export default Colors