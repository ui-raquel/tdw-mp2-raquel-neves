import styled from "styled-components";

const FiltersContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const FilterGroup = styled.div``;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  width: 200px;
  padding: 8px 16px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  border: 1px solid rgb(118, 75, 162, 0.3);
  font-weight: 500;
  min-width: 100px;
  font-size: 14px;
  height: 42px;

  &:focus {
    outline: 4px auto rgb(118, 75, 162);
    background: rgba(255, 255, 255, 0.4);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

function FilmFilters({ filters, onFilterChange, sortOrder, onSortOrderChange }) {
  return (
    <FiltersContainer>
      <FilterGroup>
        <Label htmlFor="filter">Sort by:</Label>
        <Select
          id="filter"
          value={filters}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="">None (Original Order)</option>
          <option value="director">Director</option>
          <option value="release_date">Release Year</option>
          <option value="rt_score">Rating</option>
        </Select>
      </FilterGroup>
      
      {filters && (
        <FilterGroup>
          <Label htmlFor="order">Order:</Label>
          <Select
            id="order"
            value={sortOrder}
            onChange={(e) => onSortOrderChange(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </FilterGroup>
      )}
    </FiltersContainer>
  );
}

export default FilmFilters;