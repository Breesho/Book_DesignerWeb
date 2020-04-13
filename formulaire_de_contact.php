	<?php
if(isset($_POST['mailform']))
{
	if(!empty($_POST['nom']) AND !empty($_POST['mail']) AND !empty($_POST['message']) AND !empty($_POST['prenom']))
	{
		$header="MIME-Version: 1.0\r\n";
		$header.=' From:" Portfolio "<felix.noel3@orange.fr>'."\n";
		$header.='Content-Type:text/html; charset="uft-8"'."\n";
		$header.='Content-Transfer-Encoding: 8bit';

		$message='
		<html>
			<body>
				
				
					Nom de l\'expéditeur :'.$_POST['nom'].'<br>
                    Nom de l\'expéditeur :'.$_POST['prenom'].'<br>
					Mail de l\'expéditeur :'.$_POST['mail'].'<br>
                    Mail de l\'expéditeur :'.$_POST['TEL'].'<br>
					
					'.nl2br($_POST['message']).'
					
					
				
			</body>
		</html>
		';

		mail("felix.noel3@orange.fr", "CONTACT - Portfolio", $message, $header);
		$msg="Votre message a bien été envoyé !";
	}
	else
	{
		$msg="* = Champs Obligatoire";
	}
}
?>





	<html>
	<?php include 'include/include_head.php';?>
	<?php include 'include/include_menu.php';?>

	<body>


	    <section class="formulaire_de_contact flex">

	        <div class="formulaire flex">
	         
	            <div class="blocmsg">
	                <?php if(isset($msg)) { echo $msg; }?>
	            </div>

	            <form method="POST" action="">

	                <input type="text" name="nom" placeholder="Votre nom *" value="<?php if(isset($_POST['nom'])) { echo $_POST['nom']; } ?>" /><br>
	                <input type="text" name="prenom" placeholder="Votre prenom *" value="<?php if(isset($_POST['prenom'])) { echo $_POST['prenom']; } ?>" /><br>


	                <input type="email" name="mail" placeholder="Votre email *" value="<?php if(isset($_POST['mail'])) { echo $_POST['mail']; } ?>" /><br>

	                <input type="text" name="TEL" placeholder="N° de télephone" value="<?php if(isset($_POST['TEL'])) { echo $_POST['TEL']; } ?>" /><br>

	                <textarea name="message" placeholder="Votre message *"><?php if(isset($_POST['message'])) { echo $_POST['message']; } ?></textarea><br>


	                <input class="boutonformu" type="submit" value="Envoyer" name="mailform" />


	            </form>

	        </div>
	    </section>
	</body>


	<?php include 'include/include_scriptjs.php';?>

	</html>
