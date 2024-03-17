"use client";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import { useFormState } from "react-dom";

import * as actions from "@/actions";
import FormButton from "../common/form-button";

export default function TeamCreateForm() {
  const [formState, action] = useFormState(actions.createTeam, {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Team</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Team</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />
            <Input
              name="abbreviation"
              label="Abbreviation"
              labelPlacement="outside"
              placeholder="Abbreviation"
              isInvalid={!!formState.errors.abbreviation}
              errorMessage={formState.errors.abbreviation?.join(", ")}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your team"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />

            {formState.errors._form ? (
              <div className="p-2 bg-red-200 border border-red-400 rounded">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}

            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
