import './collection-preview.styles.scss' 
import CollectionItem from '../collection-items/collection-items.component'
function PreviewCollection({title,items}) {
    return ( 
         <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className='preview'>{items.filter((item,idx)=> idx < 4).map(({id, ...otherProps})=> (
                <CollectionItem key={id} {...otherProps}>
              
                </CollectionItem>
            ))}
                
            </div>
         </div>
      );
 }
 
 export default PreviewCollection;