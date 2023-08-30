import contactItem, {
  ContactInterface,
} from "#/components/instance/icon/List-with-icon";

function phoneContact() {
  return (
    <ul className="">
      {contactItem.map((item: ContactInterface, i: number) => {
        return (
          <li key={i} className="flex items-center gap-4 py-3">
            {item.Icon ? (
              <item.Icon className="text-base-blue h-5 w-5" />
            ) : null}
            <span className="text-base">{item.contact}</span>
          </li>
        );
      })}
    </ul>
  );
}
export default phoneContact;
