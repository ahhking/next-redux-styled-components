/**
 * reducer constant
 */
export const TEST = 'TEST';
export const SET_PAGER = 'SET_PAGER';
export const CALENDAR_SET_DATE = 'CALENDAR_SET_DATE';
export const CALENDAR_SET_DEFAULT = 'CALENDAR_SET_DEFAULT';

export const HEADER_ON_CLICK_MENU = 'HEADER_ON_CLICK_MENU';

// search
export const SEARCH_ON_CLICK_SEARCH_OPTION = 'SEARCH_ON_CLICK_SEARCH_OPTION';
export const SEARCH_ON_CLICK_MENU = 'SEARCH_ON_CLICK_MENU';
export const SEARCH_ON_DISPLAY_MAP = 'SEARCH_ON_DISPLAY_MAP_ON';
export const SEARCH_ON_MOUSE_ENTER_DROPDWON = 'SEARCH_ON_MOUSE_ENTER_DROPDWON';
export const SEARCH_ON_MOUSE_LEAVE_DROPDWON = 'SEARCH_ON_MOUSE_LEAVE_DROPDWON';
export const SEARCH_SET_SELECTED_INDEX = 'SEARCH_SET_SELECTED_INDEX';
export const SEARCH_ON_CLICK_SELECT_SEARCH = 'SEARCH_ON_CLICK_SELECT_SEARCH';
export const SEARCH_UPDATE_QUERY_PARAMETERS = 'SEARCH_UPDATE_QUERY_PARAMETERS';
export const SEARCH_IMAGE_LOAD = 'SEARCH_IMAGE_LOAD';

// building
export const BUILDING_SET_MODAL = 'BUILDING_SET_MODAL';
export const BUILDING_SET_SELECTED_INDEX = 'BUILDING_SET_SELECTED_INDEX';
export const BUILDING_ON_CLICK_SELECT = 'BUILDING_ON_CLICK_SELECT';
export const BUILDING_ON_CLICK_OPTION = 'BUILDING_ON_CLICK_OPTION';
export const BUILDING_ON_SET_FROM_DATE = 'BUILDING_ON_SET_FROM_DATE';
export const BUILDING_ON_SET_TO_DATE = 'BUILDING_ON_SET_TO_DATE';
export const BUILDING_ON_CLICK_MODAL = 'BUILDING_ON_CLICK_MODAL';
export const BUILDING_ON_CLICK_SPACE = 'BUILDING_ON_CLICK_SPACE';

// space
export const SPACE_ON_TOUCH_MOVE_SLIDE = 'SPACE_ON_TOUCH_MOVE_SLIDE';
export const SPACE_ON_CLICK_SELECT = 'SPACE_ON_CLICK_SELECT';
export const SPACE_ON_CLICK_CHECK = 'SPACE_ON_CLICK_CHECK';
export const SPACE_ON_CLICK_OPTION_INDUSTRY = 'SPACE_ON_CLICK_OPTION_INDUSTRY';
export const SPACE_INIT = 'SPACE_INIT';
export const SPACE_INIT_SUCCESS = 'SPACE_INIT_SUCCESS';
export const SPACE_DESTROY = 'SPACE_DESTROY';
export const SPACE_M_INIT = 'SPACE_M_INIT';
export const SPACE_M_INIT_SUCCESS = 'SPACE_M_INIT_SUCCESS';
export const SPACE_M_SET_SPACE_INDEX = 'SPACE_M_SET_SPACE_INDEX';
export const SPACE_DEFAULT_ASSIGN = 'SPACE_DEFAULT_ASSIGN';
export const SPACE_CLICK_SUBMIT = 'SPACE_CLICK_SUBMIT';

export const PLATFORM_CHECK_SUCCESS = 'PLATFORM_CHECK_SUCCESS';
export const MOBILE_OS_CHECK = 'MOBILE_OS_CHECK';

// login api
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_SET_STATUS = 'LOGIN_SET_STATUS';

// common api
export const COMMON_CODES_SUCCESS = 'COMMON_CODES_SUCCESS';

// space api
export const NEW_REGISTRATION_SUCCESS = 'NEW_REGISTRATION_SUCCESS';
export const PARENT_AREA_SUCCESS = 'PARENT_AREA_SUCCESS';
export const CHILD_AREA_SUCCESS = 'CHILD_AREA_SUCCESS';
export const SEARCH_CODE_SUCCESS = 'SEARCH_CODE_SUCCESS';
export const SEARCH_KEYWORD_SUCCESS = 'SEARCH_KEYWORD_SUCCESS';

export const SEARCH_SET_LOADER = 'SEARCH_SET_LOADER';

export const SEARCH_POST_BUILDING_LIKE = 'SEARCH_POST_BUILDING_LIKE';
export const SEARCH_POST_BUILDING_LIKE_SUCCESS = 'SEARCH_POST_BUILDING_LIKE_SUCCESS'
export const SEARCH_ON_CLICK_OVERLAY = 'SEARCH_ON_CLICK_OVERLAY'
export const SEARCH_ON_CLICK_OVERLAY_SUCCESS = 'SEARCH_ON_CLICK_OVERLAY_SUCCESS';
export const SEARCH_ON_CLICK_CLUSTER = 'SEARCH_ON_CLICK_CLUSTER';
export const SEARCH_ON_CLICK_CLUSTER_SUCCESS = 'SEARCH_ON_CLICK_CLUSTER_SUCCESS';
export const SEARCH_GET_CLUSTER = 'SEARCH_GET_CLUSTER';
export const SEARCH_GET_CLUSTER_SUCCESS = 'SEARCH_GET_CLUSTER_SUCCESS';

export const SEARCH_M_ON_CLICK_OVERLAY = 'SEARCH_ON_CLICK_OVERLAY';
export const SEARCH_M_ON_CLICK_OVERLAY_SUCCESS = 'SEARCH_ON_CLICK_OVERLAY_SUCCESS';
export const SEARCH_M_ON_CLICK_CLUSTER = 'SEARCH_M_ON_CLICK_CLUSTER';
export const SEARCH_M_ON_CLICK_CLUSTER_SUCCESS = 'SEARCH_M_ON_CLICK_CLUSTER_SUCCESS';
export const SEARCH_M_GET_CLUSTER = 'SEARCH_M_GET_CLUSTER';
export const SEARCH_M_GET_CLUSTER_SUCCESS = 'SEARCH_M_GET_CLUSTER_SUCCESS';

export const SPACE_APPLY_SUCCESS = 'SPACE_APPLY_SUCCESS';
export const BUILDING_SUCCESS = 'BUILDING_SUCCESS';
export const BUILDING_SPACE_SUCCESS = 'BUILDING_SPACE_SUCCESS';
export const BUILDING_SPACE_FAILURE = 'BUILDING_SPACE_FAILURE';

// userSpace api
export const GET_RESERVATION_SUCCESS = 'GET_RESERVATION_SUCCESS'

// agency api
export const AGENCY_ON_CHANGE_INQUIRY_ITEM = 'AGENCY_ON_CHANGE_INQUIRY_ITEM';
export const AGENCY_ON_SET_SHOWMORE = 'AGENCY_ON_SET_SHOWMORE';
export const AGENCY_ON_SET_PORTFOLIO_TAB = 'AGENCY_ON_SET_PORTFOLIO_TAB';
export const AGENCY_ON_SET_PRESSITEM = 'AGENCY_ON_SET_PRESSITEM';
export const AGENCY_ON_CLICK_MODAL = 'AGENCY_ON_CLICK_MODAL';
export const AGENCY_ON_CLICK_SLIDER = 'AGENCY_ON_CLICK_SLIDER';
export const AGENCY_REQUEST_SUCCESS = 'AGENCY_REQUEST_SUCCESS';
export const AGENCY_SET_REQUEST_STATUS = 'AGENCY_SET_REQUEST_STATUS';

// about api
export const ABOUT_INIT = 'ABOUT_INIT';
export const ABOUT_INIT_SUCCESS = 'ABOUT_INIT_SUCCESS';
export const ABOUT_ON_MODAL_ACTION = 'ABOUT_ON_MODAL_ACTION';
// etc...

/**
 * saga constant
 */

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_DESTROY = 'LOGIN_DESTROY';

// common
export const COMMON_CODES_REQUEST = 'COMMON_CODES_REQUEST';

// search
export const SEARCH_INIT = 'SEARCH_INIT';
export const SEARCH_INIT_SUCCESS = 'SEARCH_INIT_SUCCESS';
export const SEARCH_INIT_FAILURE = 'SEARCH_INIT_FAILURE';

// space
export const SPACE_PENDING = 'SPACE_PENDING';
export const SEARCH_CODE_REQUEST = 'SEARCH_CODE_REQUEST';
export const SEARCH_KEYWORD_REQUEST = 'SEARCH_KEYWORD_REQUEST';
export const BUILDING_INIT = 'BUILDING_INIT';
export const BUILDING_INIT_SUCCESS = 'BUILDING_INIT_SUCCESS';
export const BUILDING_INIT_FAILURE = 'BUILDING_INIT_FAILURE';
export const BUILDING_REQUEST = 'BUILDING_REQUEST';
export const BUILDING_SPACE_REQUEST = 'BUILDING_SPACE_REQUEST';
export const BUILDING_DETAIL_INIT = 'BUILDING_DETAIL_INIT';
export const BUILDING_DETAIL_INIT_SUCCESS = 'BUILDING_DETAIL_INIT_SUCCESS';


// userSpace
export const GET_RESERVATION_REQUEST = 'GET_RESERVATION_REQUEST';
export const POST_RESERVATION_REQUEST = 'POST_RESERVATION_REQUEST';
export const POST_RESERVATION_SUCCESS = 'POST_RESERVATION_SUCCESS';
export const POST_RESERVATION_FAILURE = 'POST_RESERVATION_FAILURE';


// cto
export const SPACE_SEARCH = 'SPACE_SEARCH';
export const SPACE_SEARCH_SUCCESS = 'SPACE_SEARCH_SUCCESS';
export const SPACE_SEARCH_FAILURE = 'SPACE_SEARCH_FAILURE';

export const GET_POLYGON = 'GET_POLYGON';
export const GET_POLYGON_SUCCESS = 'GET_POLYGON_SUCCESS';
export const GET_POLYGON_FAILURE = 'GET_POLYGON_FAILURE';

export const GET_OVER_POLYGON = 'GET_OVER_POLYGON';
export const GET_OVER_POLYGON_SUCCESS = 'GET_OVER_POLYGON_SUCCESS';

export const SEARCH_INIT_POLYGON = 'SEARCH_INIT_POLYGON';

export const SEARCH_DEFAULT_ASSIGN = 'SEARCH_DEFAULT_ASSIGN';

export const GET_BUILDINGS = 'GET_BUILDINGS';
export const GET_BUILDINGS_SUCCESS = 'GET_BUILDINGS_SUCCESS';
export const GET_BUILDINGS_FAILURE = 'GET_BUILDINGS_FAILURE';

export const SET_LAST_SEARCH_OPTION = 'SET_LAST_SEARCH_OPTION';

export const SEARCH_ON_CLICK_GROUP_AREA = 'SEARCH_ON_CLICK_GROUP_AREA';

export const POST_LIKE = 'POST_LIKE';
export const POST_LIKE_SUCCESS = 'POST_LIKE_SUCCESS';
export const POST_LIKE_FAILURE = 'POST_LIKE_FAILURE';

export const IMAGE_UPLOAD = 'IMAGE_UPLOAD';

export const HOME_SET_MODAL = 'HOME_SET_MODAL';

export const HOME_ON_CLICK_MENU_SEARCH_BAR = 'HOME_ON_CLICK_MENU_SEARCH_BAR';
export const HOME_ON_CLICK_MENU_AREA = 'HOME_ON_CLICK_MENU_AREA';
export const HOME_ON_ENTER_DROPDOWN = 'HOME_ON_ENTER_DROPDOWN';
export const HOME_ON_CLICK_SPACE_TYPE = 'HOME_ON_CLICK_SPACE_TYPE';
export const HOME_ON_CLICK_AREA = 'HOME_ON_CLICK_AREA';
export const HOME_ON_CLICK_SELECT_TYPE = 'HOME_ON_CLICK_SELECT_TYPE';
export const HOME_ON_CLICK_SELECT_ITEM = 'HOME_ON_CLICK_SELECT_ITEM';
export const HOME_ON_MODAL_ACTION = 'HOME_ON_MODAL_ACTION'

export const HOME_INIT = 'HOME_INIT';
export const HOME_INIT_SUCCESS = 'HOME_INIT_SUCCESS';
export const HOME_INIT_FAILURE = 'HOME_INIT_FAILURE';

export const HOME_DEFAULT_ASSIGN = 'HOME_DEFAULT_ASSIGN';

export const HOME_GET_BANNER_CLICK = 'HOME_GET_BANNER_CLICK';
export const HOME_GET_BANNER_CLICK_SUCCESS = 'HOME_GET_BANNER_CLICK_SUCCESS';
export const HOME_GET_BANNER_CLICK_FAILURE = 'HOME_GET_BANNER_CLICK_FAILURE';
export const HOME_ON_CLICK_MENU = 'HOME_ON_CLICK_MENU';
export const HOME_ON_MOUSE_ENTER_OPTION = 'HOME_ON_MOUSE_ENTER_OPTION';
export const HOME_ON_MOUSE_LEAVE_OPTION = 'HOME_ON_MOUSE_LEAVE_OPTION';
export const HOME_REQUEST_SUCCESS = 'HOME_REQUEST_SUCCESS';

export const HOME_DESTROY = 'HOME_DESTROY';

export const SEARCH_PAGE_DESTROY = 'SEARCH_PAGE_DESTROY';

export const APP_INIT = 'APP_INIT';
export const APP_INIT_SUCCESS = 'APP_INIT_SUCCESS';
export const APP_INIT_FAILURE = 'APP_INIT_FAILURE';
export const APP_SPACE_DESTROY = 'APP_SPACE_DESTROY';
export const APP_SET_CUR_PAGE = 'APP_SET_CUR_PAGE';
export const APP_SET_FOOTER_TABIDX = 'APP_SET_FOOTER_TABIDX';

export const ADD_ON_CLICK_MENU_QUESTION = 'ADD_ON_CLICK_MENU_QUESTION'
export const ADD_ON_SET_SELECTED_INTERVIEW_INDEX = 'ADD_ON_SET_SELECTED_INTERVIEW_INDEX'
export const ADD_ON_SET_MODAL = 'ADD_ON_SET_MODAL'

export const ADD_APPLY_INIT = 'ADD_APPLY_INIT';
export const ADD_APPLY_INIT_SUCCESS = 'ADD_APPLY_INIT_SUCCESS';

export const ADD_APPLY_DESTROY = 'ADD_APPLY_DESTROY';
export const ADD_APPLY_USERINFO_INIT = 'ADD_APPLY_USERINFO_INIT';
export const ADD_APPLY_USERINFO_INIT_SUCCESS = 'ADD_APPLY_USERINFO_INIT_SUCCESS';
export const ADD_APPLY_SPACE_UNIT_SET = 'ADD_APPLY_SPACE_UNIT_SET';
export const ADD_APPLY_CHANGED_APPLYINFO_ITEM = 'ADD_APPLY_CHANGED_APPLYINFO_ITEM';
export const ADD_APPLY_ON_CLICK_FILE_UPLOAD = 'ADD_APPLY_ON_CLICK_FILE_UPLOAD';
export const ADD_APPLY_ON_CLICK_SELECTOR = 'ADD_APPLY_ON_CLICK_SELECTOR';
export const ADD_APPLY_ON_MOUSE_ENTER_OPTION = 'ADD_APPLY_ON_MOUSE_ENTER_OPTION';

export const ADD_APPLY_ON_CLICK_TYPE = 'ADD_APPLY_ON_CLICK_TYPE';
export const ADD_APPLY_ON_CLICK_COST = 'ADD_APPLY_ON_CLICK_COST';
export const ADD_APPLY_ON_CLICK_EXTRA_COST = 'ADD_APPLY_ON_CLICK_EXTRA_COST';

export const ADD_APPLY_ON_CLICK_ADD_BUILDING_IMAGE = 'ADD_APPLY_ON_CLICK_ADD_BUILDING_IMAGE';
export const ADD_APPLY_ON_CLICK_DEL_BUILDING_IMAGE = 'ADD_APPLY_ON_CLICK_DEL_BUILDING_IMAGE';

export const ADD_APPLY_ON_CLICK_ADD_SPACE_IMAGE = 'ADD_APPLY_ON_CLICK_ADD_SPACE_IMAGE';
export const ADD_APPLY_ON_CLICK_DEL_SPACE_IMAGE = 'ADD_APPLY_ON_CLICK_DEL_SPACE_IMAGE';

export const ADD_APPLY_ON_CLICK_SELECT_USE_DAYS = 'ADD_APPLY_ON_CLICK_SELECT_USE_DAYS';
export const ADD_APPLY_ON_CLICK_SELECT_USE_TIME = 'ADD_APPLY_ON_CLICK_SELECT_USE_TIME';
export const ADD_APPLY_ON_CLICK_SELECT_START_TIME = 'ADD_APPLY_ON_CLICK_SELECT_START_TIME';
export const ADD_APPLY_ON_CLICK_SELECT_END_TIME = 'ADD_APPLY_ON_CLICK_SELECT_END_TIME';
export const ADD_APPLY_ON_CLICK_SELECT_MIN_USE_DAYS = 'ADD_APPLY_ON_CLICK_SELECT_MIN_USE_DAYS';

export const ADD_APPLY_ON_CLICK_CHECK_OFFER = 'ADD_APPLY_ON_CLICK_CHECK_OFFER';
export const ADD_APPLY_ON_CLICK_CHECK_USES = 'ADD_APPLY_ON_CLICK_CHECK_USES';
export const ADD_APPLY_SET_MODAL = 'ADD_APPLY_SET_MODAL';

export const USER_SPACE_REGISTRATION = 'USER_SPACE_REGISTRATION';
export const USER_SPACE_REGISTRATION_SUCCESS = 'USER_SPACE_REGISTRATION_SUCCESS';
export const USER_SPACE_REGISTRATION_FAILURE = 'USER_SPACE_REGISTRATION_FAILURE';

export const SET_ADDR_BRIEF = 'SET_ADDR_BRIEF';

export const SET_LOADER = 'SET_LOADER';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const MY_ACCOUNT_INIT = 'MY_ACCOUNT_INIT';
export const MY_ACCOUNT_INIT_SUCCESS = 'MY_ACCOUNT_INIT_SUCCESS';
export const MY_ACCOUNT_DESTROY = 'MY_ACCOUNT_DESTORY';
export const MY_ACCOUNT_ON_CHANGE_INFO = 'MY_ACCOUNT_ON_CHANGE_INFO';
export const MY_ACCOUNT_ON_CLICK_SELECT_SCALE = 'MY_ACCOUNT_ON_CLICK_SELECT_SCALE';
export const MY_ACCOUNT_ON_CLICK_SELECT_PURPOSE = 'MY_ACCOUNT_ON_CLICK_SELECT_PURPOSE';

export const MY_ACCOUNT_PUT_TERMS_APPROVAL = 'MY_ACCOUNT_PUT_TERMS_APPROVAL';
export const MY_ACCOUNT_PUT_TERMS_APPROVAL_SUCCESS = 'MY_ACCOUNT_PUT_TERMS_APPROVAL_SUCCESS';
export const MY_ACCOUNT_PUT_USER_INFO = 'MY_ACCOUNT_PUT_USER_INFO';
export const MY_ACCOUNT_PUT_USER_INFO_SUCCESS = 'MY_ACCOUNT_PUT_USER_INFO_SUCCESS';
export const MY_ACCOONT_POST_USER_CONFIRM_PW = 'MY_ACCOONT_POST_USER_CONFIRM_PW';
export const MY_ACCOUNT_CHANGE_PASSWORD = 'MY_ACCOUNT_CHANGE_PASSWORD';
export const MY_ACCOUNT_DELETE_USER_WITHDRAWAL = 'MY_ACCOUNT_DELETE_USER_WITHDRAWAL';

export const MY_ACCOUNT_VALIDATE = 'MY_ACCOUNT_VALIDATE';
export const MY_ACCOUNT_VALIDATE_SUCCESS = 'MY_ACCOUNT_VALIDATE_SUCCESS';
export const MY_ACCOUNT_VALIDATE_FAILURE = 'MY_ACCOUNT_VALIDATE_FAILURE';

export const MY_ACCOUNT_TOGGLE = 'MY_ACCOUNT_TOGGLE';
export const MY_ACCOUNT_SET_MODAL = 'MY_ACCOUNT_SET_MODAL';

export const MY_ACCOUNT_ON_CLICK_SELECT_ITEM = 'MY_ACCOUNT_ON_CLICK_SELECT_ITEM';
export const MY_ACCOUNT_ON_CLICK_ALERT_ITEM = 'MY_ACCOUNT_ON_CLICK_ALERT_ITEM';
export const MY_ACCOUNT_ON_CLICK_WITHDRAWAL_ITEM = 'MY_ACCOUNT_ON_CLICK_WITHDRAWAL_ITEM';

export const MY_ACCOUNT_ON_CLICK_INDIVIDUAL_TYPE = 'MY_ACCOUNT_ON_CLICK_INDIVIDUAL_TYPE';
export const MY_ACCOUNT_DEFAULT_ASSIGN = 'MY_ACCOUNT_DEFAULT_ASSIGN';
export const MY_ACCOUNT_WITHDRAWAL_SUCCESS = 'MY_ACCOUNT_WITHDRAWAL_SUCCESS';



export const MY_PAGE_INIT = 'MY_PAGE_INIT';
export const MY_PAGE_INIT_SUCCESS = 'MY_PAGE_INIT_SUCCESS';
export const MY_PAGE_INIT_FAILURE = 'MY_PAGE_INIT_FAILURE';

export const MY_PAGE_GET_RESERVATIONS = 'MY_PAGE_GET_RESERVATIONS';
export const MY_PAGE_GET_RESERVATIONS_SUCCESS = 'MY_PAGE_GET_RESERVATIONS_SUCCESS';
export const MY_PAGE_GET_RESERVATIONS_FAILURE = 'MY_PAGE_GET_RESERVATIONS_FAILURE';

export const MY_PAGE_DELETE_USER_SPACE_RESERVATION = 'MY_PAGE_DELETE_USER_SPACE_RESERVATION';
export const MY_PAGE_DELETE_USER_SPACE_RESERVATION_SUCCESS = 'MY_PAGE_DELETE_USER_SPACE_RESERVATION_SUCCESS';
export const MY_PAGE_SET_MODAL = 'MY_PAGE_SET_MODAL';
export const MY_PAGE_SET_LOADER = 'MY_PAGE_SET_LOADER';

export const MY_PAGE_M_INIT = 'MY_PAGE_M_INIT';
export const MY_PAGE_M_INIT_SUCCESS = 'MY_PAGE_M_INIT_SUCCESS';
export const MY_PAGE_M_SET_PAGE = 'MY_PAGE_M_SET_PAGE';
export const MY_PAGE_M_GET_RESERVATIONS = 'MY_PAGE_M_GET_RESERVATIONS';
export const MY_PAGE_M_GET_RESERVATIONS_SUCCESS = 'MY_PAGE_M_GET_RESERVATIONS_SUCCESS';
export const MY_PAGE_M_DELETE_USER_SPACE_RESERVATION = 'MY_PAGE_M_DELETE_USER_SPACE_RESERVATION';
export const MY_PAGE_M_DELETE_USER_SPACE_RESERVATION_SUCCESS = 'MY_PAGE_M_DELETE_USER_SPACE_RESERVATION_SUCCESS';

// agency
export const AGENCY_INQUIRY_REQUEST = 'AGENCY_INQUIRY_REQUEST';
export const AGENCY_INQUIRY_REQUEST_FAILED = 'AGENCY_INQUIRY_REQUEST_FAILED';
export const AGENCY_PRESS_QUERY_REQUEST = 'AGENCY_PRESS_QUERY_REQUEST';
export const BTL_DESTROY = 'BTL_DESTROY';

export const JOIN_INIT = 'JOIN_INIT';
export const JOIN_DESTROY = 'JOIN_DESTROY';
export const JOIN_SET_MODAL = 'JOIN_SET_MODAL';
export const JOIN_SET_LOADER = 'JOIN_SET_LOADER';
export const JOIN_SET_STEP = 'JOIN_SET_STEP';

export const JOIN_ON_CLICK_CHECK_ALL = 'JOIN_ON_CLICK_CHECK_ALL';
export const JOIN_ON_CLICK_CHECK_ITEM = 'JOIN_ON_CLICK_CHECK_ITEM';

export const JOIN_ON_CHANGE_JOIN_ITEM = 'JOIN_ON_CHANGE_JOIN_ITEM';
export const JOIN_GET_IS_USABLE_EMAIL = 'JOIN_GET_IS_USABLE_EMAIL';
export const JOIN_GET_IS_USABLE_EMAIL_SUCCESS = 'JOIN_GET_IS_USABLE_EMAIL_SUCCESS';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const SIGN_UP_SEND_MAIL = 'SIGN_UP_SEND_MAIL';
export const SIGN_UP_SEND_MAIL_SUCCESS = 'SIGN_UP_SEND_MAIL_SUCCESS';

export const SIGN_UP_VERIFY_MAIL = 'SIGN_UP_VERIFY_MAIL';
export const SIGN_UP_VERIFY_MAIL_SUCCESS = 'SIGN_UP_VERIFY_MAIL_SUCCESS';
export const SIGN_UP_VERIFY_MAIL_FAILURE = 'SIGN_UP_VERIFY_MAIL_FAILURE';

export const FIND_ON_CHANGE_INPUT_ITEM = 'FIND_ON_CHANGE_INPUT_ITEM';
export const FIND_SET_STEP = 'FIND_SET_STEP';
export const FIND_SET_MODAL = 'FIND_SET_MODAL';
export const FIND_USER_EMAIL = 'FIND_USER_EMAIL';

export const USER_RESET_PASSWORD_EMAIL = 'USER_RESET_PASSWORD_EMAIL';
export const USER_RESET_PASSWORD_EMAIL_VERIFY = 'USER_RESET_PASSWORD_EMAIL_VERIFY';
export const USER_RESET_PASSWORD = 'USER_RESET_PASSWORD';
export const USER_RESET_PASSWORD_SUCCESS = 'USER_RESET_PASSWORD_SUCCESS';
export const USER_RESET_PASSWORD_FAILURE = 'USER_RESET_PASSWORD_FAILURE';

export const PUT_USER_DETAIL = 'PUT_USER_DETAIL';
export const PUT_USER_DETAIL_SUCCESS = 'PUT_USER_DETAIL_SUCCESS';
export const PUT_USER_DETAIL_FAILURE = 'PUT_USER_DETAIL_FAILURE';

export const GET_USER_MY_INFO = 'GET_USER_MY_INFO';
export const GET_USER_MY_INFO_SUCCESS = 'GET_USER_MY_INFO_SUCCESS';
export const GET_USER_MY_INFO_FAILURE = 'GET_USER_MY_INFO_FAILURE';


export const FIND_PENDING = 'FIND_PENDING';

export const LIKE_INIT = 'LIKE_INIT';
export const LIKE_INIT_SUCCESS = 'LIKE_INIT_SUCCESS';

export const LIKE_GET_BUILDING_LIKE = 'LIKE_GET_BUILDING_LIKE';
export const LIKE_GET_BUILDING_LIKE_SUCCESS = 'LIKE_GET_BUILDING_LIKE_SUCCESS';
export const LIKE_GET_BUILDING_LIKE_FAILURE = 'LIKE_GET_BUILDING_LIKE_FAILURE';

export const LIKE_CANCEL_LIKE_SPACE = 'LIKE_CANCEL_LIKE_SPACE';
export const LIKE_CANCEL_LIKE_SPACE_SUCCESS = 'LIKE_CANCEL_LIKE_SPACE_SUCCESS';

export const CARD_EVENT_IMG_REQUEST = 'CARD_EVENT_IMG_REQUEST';
export const CARD_EVENT_IMG_REQUEST_SUCCESS = 'CARD_EVENT_IMG_REQUEST_SUCCESS';

// mobile
export const SEARCH_M_INIT = 'SEARCH_M_INIT';
export const SEARCH_M_INIT_SUCCESS = 'SEARCH_M_INIT_SUCCESS';
export const SEARCH_M_DESTROY = 'SEARCH_M_DESTROY';

export const SEARCH_M_SET_CONTAINER = 'SEARCH_M_SET_CONTAINER';
export const SEARCH_M_SET_AREA = 'SEARCH_M_SET_AREA';
export const SEARCH_M_SET_TYPE = 'SEARCH_M_SET_TYPE';
export const SEARCH_M_SET_BM = 'SEARCH_M_SET_BM';
export const SEARCH_M_SET_PAGE = 'SEARCH_M_SET_PAGE';
export const SEARCH_M_GET_BUILDING_SEARCH_KEYWORD = 'SEARCH_M_GET_BUILDING_SEARCH_KEYWORD';
export const SEARCH_M_GET_BUILDING_SEARCH_KEYWORD_SUCCESS = 'SEARCH_M_GET_BUILDING_SEARCH_KEYWORD_SUCCESS';

export const SEARCH_M_GET_BUILDING_SEARCH_CODE = 'SEARCH_M_GET_BUILDING_SEARCH_CODE';
export const SEARCH_M_GET_BUILDING_SEARCH_CODE_SUCCESS = 'SEARCH_M_GET_BUILDING_SEARCH_CODE_SUCCESS';

export const SEARCH_M_GET_BUILDING_SEARCH_VISIBLE = 'SEARCH_M_GET_BUILDING_SEARCH_VISIBLE';
export const SEARCH_M_GET_BUILDING_SEARCH_VISIBLE_SUCCESS = 'SEARCH_M_GET_BUILDING_SEARCH_VISIBLE_SUCCESS';

export const SEARCH_M_GET_BUILDINGS = 'SEARCH_M_GET_BUILDINGS';
export const SEARCH_M_GET_BUILDINGS_SUCCESS = 'SEARCH_M_GET_BUILDINGS_SUCCESS';


export const HOME_M_ON_CLICK_SELECT_AREA = 'HOME_M_ON_CLICK_SELECT_AREA';
export const HOME_M_ON_CLICK_OPTION_AREA = 'HOME_M_ON_CLICK_OPTION_AREA';

export const BUILDING_DEFAULT_ASSIGN = 'BUILDING_DEFAULT_ASSIGN';
export const BUILDING_DESTROY = 'BUILDING_DESTROY';

export const BUILDING_M_INIT = 'BUILDING_M_INIT';
export const BUILDING_M_INIT_SUCCESS = 'BUILDING_M_INIT_SUCCESS';
export const BUILDING_M_ON_CLICK_MENU = 'BUILDING_M_ON_CLICK_MENU';
export const BUILDING_M_DEFAULT_ASSIGN = 'BUILDING_M_DEFAULT_ASSIGN';
export const BUILDING_POST_BUILDING_LIKE = 'BUILDING_POST_BUILDING_LIKE';
export const BUILDING_POST_BUILDING_LIKE_SUCCESS = 'BUILDING_POST_BUILDING_LIKE_SUCCESS';

export const APP_SET_PAGE = 'APP_SET_PAGE';

export const HOME_SET_MDPICK_INDEX = 'HOME_SET_MDPICK_INDEX'


export const LOGIN_VALIDATE = 'LOGIN_VALIDATE';
export const LOGIN_VALIDATE_SUCCESS = 'LOGIN_VALIDATE_SUCCESS';

export const SEARCH_VISIBLE_DONG_SEARCH = 'SEARCH_VISIBLE_DONG_SEARCH';
export const SEARCH_VISIBLE_DONG_SEARCH_SUCCESS = 'SEARCH_VISIBLE_DONG_SEARCH_SUCCESS';
export const LIKE_M_SET_LOADER = 'LIKE_M_SET_LOADER';
export const LIKE_M_GET_LIKE_COUNT = 'LIKE_M_GET_LIKE_COUNT';
export const LIKE_M_GET_LIKE_COUNT_SUCCESS = 'LIKE_M_GET_LIKE_COUNT_SUCCESS';
export const LIKE_M_GET_BUILDING_LIKE = 'LIKE_M_GET_BUILDING_LIKE';
export const LIKE_M_GET_BUILDING_LIKE_SUCCESS = 'LIKE_M_GET_BUILDING_LIKE_SUCCESS';
export const LIKE_M_SET_PAGE = 'LIKE_M_SET_PAGE';
