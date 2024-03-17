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

interface SeasonCreateFormProps {
  teamId: string;
  teamSlug: string;
}

export default function SeasonCreateForm({
  teamId,
  teamSlug,
}: SeasonCreateFormProps) {
  //const { teamId, teamSlug } = params;

  const [formState, action] = useFormState(
    actions.createSeason.bind(null, teamId, teamSlug),
    {
      errors: {},
    }
  );

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Season</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Season</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />
            <Input
              name="slug"
              label="Abbreviation"
              labelPlacement="outside"
              placeholder="Abbreviation"
              isInvalid={!!formState.errors.slug}
              errorMessage={formState.errors.slug?.join(", ")}
            />
            <Input
              type="date"
              name="seasonStart"
              label="Season Start"
              labelPlacement="outside"
              isInvalid={!!formState.errors.seasonStart}
              errorMessage={formState.errors.seasonStart?.join(", ")}
            />
            <Input
              type="date"
              name="seasonEnd"
              label="Season End"
              labelPlacement="outside"
              isInvalid={!!formState.errors.seasonEnd}
              errorMessage={formState.errors.seasonEnd?.join(", ")}
            />
            End
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
