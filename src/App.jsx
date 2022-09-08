import "./App.css";

import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { FontSizes } from "@fluentui/theme";
import { Icon } from "@fluentui/react/lib/Icon";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

initializeIcons();

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <br />
        <Icon
          iconName="WindowsLogo"
          style={{ fontSize: FontSizes.size68, color: "#0078d4" }}
        />
        <br />

        <div>
          <DefaultButton className="btn">Default Button</DefaultButton>
          <PrimaryButton className="btn">Primary Button</PrimaryButton>
        </div>
      </header>
    </div>
  );
}

export default App;
