import React from 'react';
import Poster from '../components/Poster/Poster.components';
import PlayFilter from '../components/PlatFilters/PlayFilters.Component';
const Plays = ()=>{
  return <>
     <div className="container mx-auto px-4">
         <div className="w-full lg:flex lg:flex-row-reverse">
             <div className="lg:w-3/4">
                 <h2 className="text-2xl font-bold m-4">
                     Play in NCR Delhi
                 </h2>
                 <div className="flex flex-wrap">
                     <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 ">
                         <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307894-swmrwbmltq-portrait.jpg' title='Sharaft chode di Maine' subtitle='Akshara Theatra: Delhi'/>
                     </div>
                     <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 ">
                         <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307894-swmrwbmltq-portrait.jpg' title='Sharaft chode di Maine' subtitle='Akshara Theatra: Delhi'/>
                     </div>
                     <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 ">
                         <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307894-swmrwbmltq-portrait.jpg' title='Sharaft chode di Maine' subtitle='Akshara Theatra: Delhi'/>
                     </div>
                     <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 ">
                         <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307894-swmrwbmltq-portrait.jpg' title='Sharaft chode di Maine' subtitle='Akshara Theatra: Delhi'/>
                     </div>
                     </div>
         </div>

         <div className="lg:w-3/12">
             <h2 className="text-2xl font-bold m-4">Filters</h2>
             <div>
                 <PlayFilter title="date" tags={["Today","Tomorrow","This week"]}/>
             </div>
             <div>
                 <PlayFilter title="language" tags={["English","Hindi","Tamil"]}/>
             </div>
         </div>
     </div>
</div>
  </>
}

export default Plays;