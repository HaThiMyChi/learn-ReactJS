import React from 'react';
import PropTypes from 'prop-types';
import {Box, makeStyles, Chip} from '@material-ui/core';
import { useMemo } from 'react';

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        padding: 0,
        margin: theme.spacing(2, 0),
        listStyleType: 'none',

        '& > li' : {
            margin: 0,
            padding: theme.spacing(1)
        }
    },

}));

const FILTER_LIST = [
    {
        id: 1,
        getLabel: (filters) => 'Giao hàng miễn phí',
        isActive: (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => {},

        // Nếu đang bật thì xóa nó, còn ko bật thì add vào để bật lên
        onToggle: (filters) => {
            const newFilters = {...filters};
            debugger
            if (newFilters.isFreeShip) {
                delete newFilters.isFreeShip
            } else {
                newFilters.isFreeShip = true
            }
            return newFilters;
        },
    },
    {
        id: 2,
        getLabel: () => 'Có khuyến mãi',
        isActive: () => true,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters}
            delete newFilters.isPromotion
            return newFilters;
        },
        onToggle: null,
    },
    {
        id: 3,
        getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filters) => Object.keys(filters).includes('salePrice_gte') && Object.keys(filters).includes('salePrice_lte'),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters}
            delete newFilters.salePrice_gte;
            delete newFilters.salePrice_lte;
            return newFilters;
        },
        onToggle: null,
    },
    // {
    //     id: 4,
    //     getLabel: (filters) => 'Danh mục',
    //     isActive: () => true,
    //     isVisible: (filters) => true,
    //     isRemovable: true,
    //     onRemove: (filters) => {},
    //     onToggle: (filters) => {},
    // },
];



function FilterViewer({filters = {}, onChange = null}) {
    const classes = useStyles();

    // Call useMemo at the top level of your component to cache a calculation between re-renders
    // neu filters nay ko thay doi thi no ko tinh lai, nguoc lai
    const visibleFilters = useMemo(() => {
        return FILTER_LIST.filter((x) => x.isVisible(filters));
    }, [filters]);

    return (
      <Box component="ul" className={classes.root}>
        {visibleFilters.map((x) => (
          <li key={x.id}>
            <Chip
              size="small"
              label={x.getLabel(filters)}
              color={x.isActive(filters) ? "primary" : "default"}
              clickable={!x.isRemovable} //remove duoc thi khong click duoc
              onClick={
                x.isRemovable
                  ? null
                  : () => {
                      if (!onChange) return;

                      const newFilters = x.onToggle(filters);
                      onChange(newFilters);
                    }
              }
              onDelete={
                x.isRemovable
                  ? () => {
                      if (!onChange) return;

                      const newFilters = x.onRemove(filters);
                      onChange(newFilters);
                    }
                  : null
              }
            />
          </li>
        ))}
      </Box>
    );
}

export default FilterViewer;