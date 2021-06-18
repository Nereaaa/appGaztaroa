import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { excursiones } from './excursiones';
import { comentarios } from './comentarios';
import { cabeceras } from './cabeceras';
import { actividades } from './actividades';
import { favoritos } from './favoritos';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfigurePersistent = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['excursiones', 'favoritos'],

}

const Reducers = combineReducers({
    excursiones,
    comentarios,
    cabeceras,
    actividades,
    favoritos,
});

const ReducerPersistent = persistReducer(ConfigurePersistent, Reducers); 
export const store = createStore(ReducerPersistent, applyMiddleware(thunk));
export const persistentStore = persistStore(store);