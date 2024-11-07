import "./index.scss";
import { X } from "lucide-react";
import { AlertType } from "../../../../types";
interface IProps {
  type: AlertType;
  icon: AlertType;
  title: AlertType;
  description?: AlertType;
}
const Alert = ({
  type = "alert-default",
  icon,
  title,
  description,
}: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>

          <h4>{title}</h4>
        </div>
        <X className="close" size={20} />
      </div>

      <p>{description}</p>
    </div>
  );
};
export default Alert;
