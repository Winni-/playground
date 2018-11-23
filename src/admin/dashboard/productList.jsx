import React, {useEffect} from 'react';
import { Table, TableHead, Heading, SearchTableHeaderCell, TextTableHeaderCell, TableBody, TableRow, TextTableCell } from 'evergreen-ui';
import {connect} from 'react-redux';
import { getProductList } from '../actions'

const productList = ({getProductList}) => {
  const products = [];
  
  useEffect(()=>{
    if( products.length <= 0) {
      getProductList()
    }
  })
  return (
   <div>
     <Heading size={ 800 } marginBottom={24}>Мне позвонили, узнать hr ли это</Heading>
     <Table>
       <TableHead>
         <SearchTableHeaderCell />
         <TextTableHeaderCell isSortable sortOrder="descending">
           Organization
         </TextTableHeaderCell>
         <TextTableHeaderCell borderRight={null}>
           Name
         </TextTableHeaderCell>
       </TableHead>
       <TableBody height={240}>
         {products.map(profile => (
           <TableRow key={profile.id} isSelectable>
             <TextTableCell>{profile.phone}</TextTableCell>
             <TextTableCell>{profile.organization}</TextTableCell>
             <TextTableCell borderRight={null}>
               {profile.name}
             </TextTableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </div>
  );
};

export const ProductList = connect(null,{getProductList})(productList)