import * as types from '../actions';

const initialState = {
  isPending: false,
  /**
   * HEADER_ENABLED
   * HEADER_DISABLED
   */
  pageState: 'HEADER_ENABLED',
  pageQueue: ['/', '/', '/'],
  headerData: {
    isMenu: false
  },
  homePageData: {
    searchOption: ''
  },
  searchPageData: {
    isShow: false,
    isMap: false,
    menuIndex: -1,
    selectedIndex: -1,
    selectSearchOption: [-1, -1],
    isDropDownOver: false
  },
  buildingPageData: {
    selectedIndex: 0,
    isSelectSpace: false,
    selectSpace: {
      selectedIndex: -1
    },
    spaceInfo: {
      selectedIndex: 0
    },
    modal: {
      isShow: false,
      type: ''
    }
  },
  spacePageData: {
    isSuccess: false,
    isCategory: false,
    selectIndustry: {
      selectedIndex: -1
    },
    spaceTypes: [0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  },
  paginationData: {
    totalItems: 0,
    currentPage: 0,
    pageSize: 0,
    totalPages: 0,
    startPage: 0,
    endPage: 0,
    startIndex: 0,
    endIndex: 0,
    pages: []
  },
  calendar: {
    startDate: null,
    endDate: null
  },
  g: {
    commonCodes: new Array(100),
    overlays: null
  },
  footer: {
    tabIndex: -1
  }
};

// toggle 처리는 리듀서에서 해주면 될 듯?
const app = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_INIT_SUCCESS: {
      // return {
      //   ...state,
      //   appData: {
      //     ...state.appData,
      //     commonCodes: [
      //       ...state.appData.commonCodes.slice(0, action.data.index),
      //       action.data.value,
      //       ...state.appData.commonCodes.slice(action.data.index + 1, state.appData.commonCodes.length)
      //     ]
      //   }
      // }
      return {
        ...state,
        g: {
          commonCodes: action.data
        }
      };
    }
    case types.SET_LOADER: {
      return {
        ...state,
        isPending: action.data
      };
    }
    case 'APP_TEST':
      if (state.homePageData.searchOption == action.data) {
        console.log('이전과 같다.');

        return {
          ...state,
          homePageData: {
            searchOption: ''
          }
        };
      } else {
        return {
          ...state,
          homePageData: {
            searchOption: action.data
          }
        };
      }
    case types.SET_PAGER:
      console.log('set_pager action: ', action);
      return {
        ...state,
        paginationData: action.data
      };
    case types.HEADER_ON_CLICK_MENU:
      return {
        ...state,
        headerData: {
          isMenu: action.data
        }
      }
    // search
    case types.SEARCH_ON_CLICK_SELECT_SEARCH:
      if (action.data.index == 0) {
        return {
          ...state,
          searchPageData: {
            ...state.searchPageData,
            selectSearchOption: [
              action.data.value,
              state.searchPageData.selectSearchOption[1]
            ],
            menuIndex: -1,
          }
        };
      } else {
        return {
          ...state,
          searchPageData: {
            ...state.searchPageData,
            selectSearchOption: [
              state.searchPageData.selectSearchOption[0],
              action.data.value
            ],
            menuIndex: -1,
          }
        };
      }
    case types.SEARCH_SET_SELECTED_INDEX:
      return {
        ...state,
        searchPageData: {
          ...state.searchPageData,
          selectedIndex: action.data,
          menuIndex: -1,
        }
      };
    case types.SEARCH_ON_CLICK_MENU:
      return {
        ...state,
        searchPageData: {
          isShow: action.data
        }
      }
    case types.SEARCH_ON_DISPLAY_MAP:
      return {
        ...state,
        searchPageData: {
          ...state.searchPageData,
          isMap: action.data
        }
      };
    case types.SEARCH_ON_CLICK_SEARCH_OPTION:
      // if (state.searchPageData.menuIndex == action.data) {
      //   return {
      //     ...state,
      //     searchPageData: {
      //       ...state.searchPageData,
      //       menuIndex: -1,
      //       selectedIndex: -1
      //     }
      //   };
      // } else {
      //   return {
      //     ...state,
      //     searchPageData: {
      //       ...state.searchPageData,
      //       menuIndex: action.data
      //     }
      //   };
      // }
      return {
        ...state,
        searchPageData: {
          ...state.searchPageData,
          menuIndex: action.data
        }
      };
    case types.SEARCH_ON_MOUSE_ENTER_DROPDWON:
      return {
        ...state,
        searchPageData: {
          ...state.searchPageData,
          isDropDownOver: true
        }

      };
    case types.SEARCH_ON_MOUSE_LEAVE_DROPDWON:
      return {
        ...state,
        searchPageData: {
          ...state.searchPageData,
          isDropDownOver: false
        }

      }
    case types.SEARCH_PAGE_DESTROY:
      return {
        ...state,
        searchPageData: {
          isShow: false,
          isMap: false,
          menuIndex: -1,
          selectedIndex: -1,
          selectSearchOption: [-1, -1],
          isDropDownOver: false
        }
      }
    // building
    case types.SPACE_APPLY_SUCCESS:
      return {
        ...state,
        spacePageData: {
          ...state.spacePageData,
          isSuccess: action.data
        }
      };
    case types.BUILDING_SET_SELECTED_INDEX:
      return {
        ...state,
        buildingPageData: {
          ...state.buildingPageData,
          selectedIndex: action.data
        }
      };
    case types.BUILDING_ON_CLICK_SELECT:
      return {
        ...state,
        buildingPageData: {
          ...state.buildingPageData,
          isSelectSpace: action.data
        }
      };
    case types.BUILDING_ON_CLICK_OPTION:
      return {
        ...state,
        buildingPageData: {
          ...state.buildingPageData,
          isSelectSpace: false,
          selectSpace: {
            selectedIndex: action.data
          }
        }
      };
    case types.BUILDING_ON_CLICK_MODAL:
      return {
        ...state,
        buildingPageData: {
          ...state.buildingPageData,
          modal: {
            isShow: action.data.isShow,
            type: action.data.type
          }
        }
      };
    case types.BUILDING_ON_CLICK_SPACE:
      return {
        ...state,
        buildingPageData: {
          ...state.buildingPageData,
          spaceInfo: {
            selectedIndex: action.data
          }
        }
      };
    // space
    case types.SPACE_ON_TOUCH_MOVE_SLIDE:
      return {
        ...state,
        spacePageData: {
          rate: action.data
        }
      }
    case types.SPACE_ON_CLICK_SELECT:
      return {
        ...state,
        spacePageData: {
          ...state.spacePageData,
          isCategory: action.data
        }
      };
    case types.SPACE_ON_CLICK_OPTION_INDUSTRY:
      return {
        ...state,
        spacePageData: {
          ...state.spacePageData,
          selectIndustry: {
            selectedIndex: action.data
          },
          isCategory: false
        }
      };
    case types.SPACE_ON_CLICK_CHECK:
      return {
        ...state,
        spacePageData: {
          // 기존 인덱스, 기존 다음 인덱스 넣고 그 배열 값만 수정
          ...state.spacePageData,
          spaceTypes: [
            ...state.spacePageData.spaceTypes.slice(0, action.data.index),
            action.data.value,
            ...state.spacePageData.spaceTypes.slice(action.data.index + 1, state.spacePageData.length),
          ]
        }
      }
    case types.POST_RESERVATION_SUCCESS:
      return {
        ...state,
        spacePageData: {
          ...state.spacePageData,
          isSuccess: true
        }
      };
    case types.APP_SET_PAGE: {
      return {
        ...state,
        pageState: action.data
      }
    }
    case types.APP_SPACE_DESTROY:
      return {
        ...state,
        spacePageData: {
          isSuccess: false,
          isCategory: false,
          selectIndustry: {
            selectedIndex: -1
          },
          spaceTypes: [0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      }
    case types.APP_SET_CUR_PAGE:
      return {
        ...state,
        pageQueue: [
          state.pageQueue[1],
          state.pageQueue[2],
          action.data
        ]
      }
    case types.APP_SET_FOOTER_TABIDX:
      return {
        ...state,
        footer: {
          ...state.footer,
          tabIndex: action.data
        }
      }
    case types.CALENDAR_SET_DATE:
      console.log(action.data)
      return {
        ...state,
        calendar: action.data
      }
    case types.CALENDAR_SET_DEFAULT:
      return {
        ...state,
        calendar: {
          startDate: null,
          endDate: null
        }
      }

    default:
      return state;
  }
}

export default app;
