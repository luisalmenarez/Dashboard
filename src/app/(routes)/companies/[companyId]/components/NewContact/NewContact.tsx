'use client';

import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';

export const NewContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add new contact</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Add new contact</DialogTitle>
          <DialogDescription>
            Create your contacts to manage them later.
          </DialogDescription>
        </DialogHeader>
        <p>Form Contact</p>
      </DialogContent>
    </Dialog>
  );
};
