import {useInfiniteQuery,useMutation} from 'react-query';
import {request,configOptions} from './index'


export const useCodes = (props)=>
    useInfiniteQuery(
      'codes',
      ({pageParam=1})=>{
        return request('/code?page='+ pageParam,'get')},
      {
        select:(data)=>{
          console.log(data)
          return {
            pages:{
              ...data.pages[data.pages.length],
              docs:data.pages.map(item=>item.docs).flat()
            }
          }
        },
        ...props,
        ...configOptions
      }
    )

export const useCreateCode = ()=>{
  return useMutation(
    (data)=>request('/code','post',data),
    {...configOptions}
  )
}
