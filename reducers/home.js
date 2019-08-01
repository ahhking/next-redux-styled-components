import * as types from '../actions';

const initialState = {
  userInfo: {},
  isModal: false,
  vimeoUrl: '',
  menuSearchBar: -1,
  menuArea: 0,
  isDropDownOver: false,
  optionArea: {
    parentCode: '01',
    childCode: '00',
    value: '전체'
  },
  newRegistration: [],
  optionSpace: {
    key: '',
    value: '전체'
  },
  optionCost: {
  },
  recommendation: [],
  mdPickIndexes: [
    0, 0, 0
  ],
  banners: [],
  reviewVideos: [],
  comorgName: '',
  selectType: {
    selectedIndex: 0,
    selectedValue: 'INDIVIDUAL'
  },
  selectPurpose0: {
    selectedIndex: -1,
    isValidate: undefined,
    value: ''
  },
  selectPurpose1: {
    selectedIndex: -1,
    isValidate: undefined,
    value: ''
  },
  selectScale: {
    selectedIndex: -1,
    isValidate: undefined,
    value: ''
  },
  menu: {
    user: {
      isShow: false,
      isOver: false
    }
  },
  mobile: {
    selectArea: {
      isVisible: false
    },
    optionArea: {
      selectedIndex: 0,
      parentCode: '01',
      childCode: '00',
      value: '전체'
    }
  },
  request: {
    init: {
      isPending: false,
      isSuccess: false
    },
    image: {
      isLoaded: false
    }
  }
};

const home = (state = initialState, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case types.HOME_ON_CLICK_MENU_SEARCH_BAR:
      return {
        ...state,
        menuSearchBar: action.data
      };
    case types.HOME_ON_CLICK_MENU_AREA:
      return {
        ...state,
        menuArea: action.data
      };
    case types.HOME_ON_ENTER_DROPDOWN:
      return {
        ...state,
        isDropDownOver: action.data
      };
    case types.HOME_ON_CLICK_AREA:
      return {
        ...state,
        optionArea: {
          parentCode: action.data.parentCode,
          childCode: action.data.childCode,
          value: action.data.value
        },
        menuSearchBar: -1
      };
    case types.HOME_ON_CLICK_SPACE_TYPE:
      return {
        ...state,
        optionSpace: {
          key: action.data.key,
          value: action.data.value
        },
        menuSearchBar: -1
      };
    case types.HOME_INIT_SUCCESS:
      return {
        ...state,
        optionArea: initialState.optionArea,
        optionSpace: initialState.optionSpace,
        ...action.data
        // recommendation: action.data.recommendation,
        // banners: action.data.banners,
        // reviewVideos: action.data.reviewVideos,
        // userInfo: action.data.userInfo,
        // isModal: action.data.isModal
      };
    case types.HOME_ON_CLICK_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          [action.data.key]: {
            // isShow: !state.menu.user.isShow
            ...state.menu.user,
            ...action.data.value
          }
        }
      };
    case types.HOME_ON_MOUSE_ENTER_OPTION:
      return {
        ...state,
        menu: {
          ...state.menu,
          [action.data.key]: {
            ...state.menu[action.data.key],
            ...action.data.value
          }
        }
      };
    case types.HOME_DESTROY:
      return {
        ...state,
        userInfo: {},
        isModal: false,
        menuSearchBar: -1,
        menuArea: 0,
        isDropDownOver: false,
        optionArea: {
          parentCode: '01',
          childCode: '00',
          value: '전체'
        },
        newRegistration: [],
        optionSpace: {
          key: '',
          value: '전체'
        },
        optionCost: {
        },
        mdPickIndexes: [
          0, 0, 0
        ],
        comorgName: '',
        selectType: {
          selectedIndex: 0,
          selectedValue: 'INDIVIDUAL'
        },
        selectPurpose0: {
          selectedIndex: -1,
          isValidate: undefined,
          value: ''
        },
        selectPurpose1: {
          selectedIndex: -1,
          isValidate: undefined,
          value: ''
        },
        selectScale: {
          selectedIndex: -1,
          isValidate: undefined,
          value: ''
        },
        menu: {
          user: {
            isShow: false,
            isOver: false
          }
        },
        mobile: {
          selectArea: {
            isVisible: false
          },
          optionArea: {
            selectedIndex: 0,
            parentCode: '01',
            childCode: '00',
            value: '전체'
          }
        },
        request: {
          init: {
            isPending: false,
            isSuccess: false
          },
          image: {
            isLoaded: false
          }
        }
      };
    case types.HOME_ON_CLICK_SELECT_TYPE:
      return {
        ...state,
        comorgName: '',
        selectType: {
          selectedIndex: action.data.index,
          selectedValue: action.data.value
        },
        selectPurpose0: {
          selectedIndex: -1,
          isValidate: undefined,
          value: ''
        },
        selectPurpose1: {
          selectedIndex: -1,
          isValidate: undefined,
          value: ''
        },
        selectScale: {
          selectedIndex: -1,
          isValidate: undefined,
          value: ''
        }
      };
    case types.HOME_ON_CLICK_SELECT_ITEM:
      return {
        ...state,
        [action.data.key]: {
          ...state[action.data.key],
          selectedIndex: action.data.index,
          value: action.data.value,
          isValidate: action.data.isValidate
        }
      };
    case types.HOME_SET_MODAL:
      return {
        ...state,
        isModal: action.data
      };
    case types.HOME_M_ON_CLICK_SELECT_AREA:
      return {
        ...state,
        mobile: {
          ...state.mobile,
          selectArea: {
            ...state.selectArea,
            isVisible: action.data
          }
        }
      };
    case types.HOME_M_ON_CLICK_OPTION_AREA:

      if (action.data.parentCode) {
        return {
          ...state,
          mobile: {
            ...state.mobile,
            optionArea: {
              ...state.mobile.optionArea,
              ...action.data
            }
          }
        }
      } else {
        return {
          ...state,
          mobile: {
            ...state.mobile,
            selectArea: {
              isVisible: false
            },
            optionArea: {
              ...state.mobile.optionArea,
              ...action.data
            }
          }
        }
      }
    case types.HOME_SET_MDPICK_INDEX:
      return {
        ...state,
        mdPickIndexes: [
          ...state.mdPickIndexes.slice(0, action.data.index),
          action.data.value,
          ...state.mdPickIndexes.slice(action.data.index + 1, state.mdPickIndexes.length)
        ]
      }
    case types.HOME_DEFAULT_ASSIGN:
      return {
        ...state,
        [action.data.key]: action.data.value
      };
    case types.HOME_ON_MODAL_ACTION:
      return {
        ...state,
        isModal: action.data.isModal,
        vimeoUrl: action.data.vimeoUrl
      };
    case types.HOME_REQUEST_SUCCESS:
      return {
        ...state,
        request: {
          ...state.request,
          [action.data.pKey]: {
            ...state.request[action.data.pKey],
            [action.data.cKey]: action.data.value
          }
        }
      };
    default:
      return state;
  }
}

export default home;
