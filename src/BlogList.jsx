import React, {Component} from 'react';

class BlogList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className='rp-bloglist'>
        {
          this.props.itemsList.map((item) => {
            return (
              <li
                key={item.id}
                className='rp-bloglist-item'
                onClick={() => this.props.onItemSelect(item)}
              >
                { item.title }
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default BlogList;
