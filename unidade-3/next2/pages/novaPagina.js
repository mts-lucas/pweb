import { SocialMedia } from './partials/social';
import { MyTable } from './partials/table';

export default function Principal(){

    let name = 'Skol';
    let mark = 'Redonda';
    return (
 
       <div>
 
          <h1>Nova Página</h1>
            
          <MariaPrea/>
          <MyTable nome={name} marca={mark}/>
          <SocialMedia/>
 
       </div>
 
    );
 
 }

export function MariaPrea(){

    return (
    
        <h2>Morreu Maria Preá...</h2>
    
    )
    
}
