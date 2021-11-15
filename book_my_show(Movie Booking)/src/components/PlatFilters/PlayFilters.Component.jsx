import react from 'react';
import {Disclosure} from '@headlessui/react';
import {BiChevronDown,BiChevronUp} from 'react-icons/bi'

const PlayFilter =(props)=>{
    return(
    <Disclosure>
        {({open})=>(
            <>
            <Disclosure.Button className="py-2 flex  items-center gap-3 mb-2 border-outline:none">
              {open ? <BiChevronUp/> : <BiChevronDown/>}
              <span className={open ? "text-red-600" : "text-gray-700"}>
                  {props.title}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel>
                <div className="flex items-center gap-3 flex-wrap">
                    {props.tags.map((tag)=>(
                        <div className="border border-gray-200 px-3 py-2">
                            <span className="text-red-600">{tag}</span>
                        </div>
                    ))}
                </div>
            </Disclosure.Panel>
            </>
        )}
    </Disclosure>
    )
}
export default PlayFilter;