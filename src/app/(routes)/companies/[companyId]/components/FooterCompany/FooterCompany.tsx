'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Trash } from 'lucide-react';
import {
  Button,
  toast,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import { FooterCompanyProps } from './FooterCompany.types';

export const FooterCompany = (props: FooterCompanyProps) => {
  const [open, setOpen] = useState(false);

  const onCancel = () => {
    setOpen(false);
  };

  const { companyId } = props;
  const router = useRouter();

  const onDeleteCompany = async () => {
    try {
      axios.delete(`/api/company/${companyId}`);
      toast({
        title: 'Company Deleted',
      });
      setOpen(false);
      router.push('/companies');
    } catch (error) {
      toast({
        title: 'Something went wrong',
        variant: 'destructive',
      });
    }
  };

  return (
    <footer className="flex justify-end mt-5">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive">
            <Trash className="size-4 mr-2" />
            Remove Company
          </Button>
        </DialogTrigger>
        <DialogContent className="grid place-items-center ">
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this company?
            </DialogTitle>
          </DialogHeader>
          <Button variant="secondary" onClick={onCancel} className="w-3/4">
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onDeleteCompany}
            className="w-3/4"
          >
            Confirm
          </Button>
        </DialogContent>
      </Dialog>
    </footer>
  );
};
