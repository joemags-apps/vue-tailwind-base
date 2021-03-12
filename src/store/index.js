import { createStore } from 'vuex'

import actions from './vuex/actions';
import state from './vuex/state';
import modules from './vuex/modules';
import mutations from './vuex/mutations';
import getters from './vuex/getters';

const appStore =  {
	state,
	actions,
	getters,
	mutations,
	modules,
};

/**
 * Create vuex instance
 */
export const store = createStore(appStore);