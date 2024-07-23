import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
} from '@/components/ui';
import { ConfirmDeleteDialogProps } from './ConfirmDialog.types';

export const ConfirmDialog = (props: ConfirmDeleteDialogProps) => {
  const { isOpen, onCancel, eventTitle, onConfirm } = props;

  return (
    <Dialog open={isOpen} onOpenChange={onCancel}>
      <DialogContent>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete the event {eventTitle}?
        </DialogDescription>
        <DialogFooter>
          <Button variant="destructive" onClick={onConfirm}>
            Delete
          </Button>
          <Button variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
