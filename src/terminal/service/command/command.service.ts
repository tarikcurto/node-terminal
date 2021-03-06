/*
 * Copyright 2017 Tarik Curto - centro.tarik@live.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NameCommandService} from "./name-command.service";
import {ArgumentCommandService} from "./argument-command.service";
import {ExecutionService} from "./../execution/execution.service";

export class CommandService {

    public nameCommandService: NameCommandService;

    public argumentCommandService: ArgumentCommandService;

    public constructor() {

        this.nameCommandService = new NameCommandService;
        this.argumentCommandService = new ArgumentCommandService();
    }

    public build(): string {

        let command: string = this.nameCommandService.build() + ' ' +
            this.argumentCommandService.build();


        return command;
    }

    public instanceExecution(): ExecutionService {

        let command: string = this.build();
        let executionService: ExecutionService = new ExecutionService(command);

        return executionService;
    }

}