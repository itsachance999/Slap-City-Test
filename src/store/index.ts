import { createStore } from 'jotai';
import counterAtom from './counter';

const slapStore = createStore();

slapStore.set(counterAtom, 0);

export {
    slapStore
};