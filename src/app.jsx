/*
 * This file is part of Cockpit.
 *
 * Copyright (C) 2017 Red Hat, Inc.
 *
 * Cockpit is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * Cockpit is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Cockpit; If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/Header/header';
import SearchInputBlock from './components/SearchInputBlock/searchinputblock';
import MainApp from './components/MainApp/mainapp';

export class Application extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <SearchInputBlock />
                    <MainApp />
                </div>
            </Provider>
        );
    }
}
