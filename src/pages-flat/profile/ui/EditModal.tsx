import { Button, Card, Modal, TextField } from "@/shared/components";

type EditModalProps = {
  open: boolean;
  onClose: () => void;
};

export function EditModal({ open, onClose }: EditModalProps) {
  return (
    <Modal open={open} onClose={onClose} className="max-w-[540px]">
      <Card.Head>
        <Card.Title>Редактировать профиль</Card.Title>
      </Card.Head>
      <Card.Content className="flex flex-col gap-4">
        <div className="w-full flex gap-4">
          <TextField wrapperClassName="flex-1" label="Имя" placeholder="Имя" />
          <TextField
            wrapperClassName="flex-1"
            label="Фамилия"
            placeholder="Фамилия"
          />
        </div>
        <div className="flex items-end gap-2">
          <TextField
            value="misha-bebra@gmail.com"
            wrapperClassName="flex-1"
            readOnly
            label="Email"
            placeholder="Email"
          />
          <Button>
            Изменить
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant="dark">Сохранить</Button>
          <Button variant="secondary" onClick={onClose}>
            Отмена
          </Button>
        </div>
      </Card.Content>
    </Modal>
  );
}
