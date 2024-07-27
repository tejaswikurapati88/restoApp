import './index.css'

const CateList = props => {
  const {cateDataDetails, cateSelection, isSelected} = props
  const {menuCategory, menuCategoryId} = cateDataDetails
  const onCateSelection = () => {
    cateSelection(menuCategoryId)
  }
  return (
    <li className="catList">
      <button
        type="button"
        onClick={onCateSelection}
        className={isSelected ? 'selectedCatButton CatButton' : 'CatButton'}
      >
        {menuCategory}
      </button>
    </li>
  )
}

export default CateList
