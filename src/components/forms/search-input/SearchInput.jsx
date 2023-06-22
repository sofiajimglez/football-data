export default function SearchInput({ search, onSearch, placeholder }) {
  return (
    <div className="mt-3 input-group">
      <span class="input-group-text" id="search filter"><i class="fa-solid fa-magnifying-glass"></i></span>
      <input type="text" value={search} className="form-control" placeholder={placeholder} id="search" aria-describedby="search filter" onChange={(event) => {onSearch(event.target.value)}} />
    </div>
  )
}
